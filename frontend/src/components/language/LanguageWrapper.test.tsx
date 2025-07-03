import React from 'react'
import LanguageWrapper from "./LanguageWrapper";
import { render, screen, waitFor } from "@testing-library/react";

jest.mock('../../utils/i18n', () => ({
  __esModule: true,
  default: {
    changeLanguage: jest.fn(() => Promise.resolve())
  }
}));

const i18n = require('../../utils/i18n')

describe('language wrapper', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        Storage.prototype.getItem = jest.fn(() => 'ka')
    })

    it('calls i18n changelanguage funciton with the language from localstorage', async () => {
        render(
            <LanguageWrapper>
                <div>child</div>
            </LanguageWrapper>
        )
        expect(i18n.default.changeLanguage).toHaveBeenCalledWith('ka')

        await waitFor(() => {
            expect(screen.getByText('child')).toBeInTheDocument();
        })
    })

    it('doesnt render children until ready', async() => {
        let resolveLang: () => void
        (i18n.default.changeLanguage as jest.Mock).mockImplementation(
            () =>  new Promise<void>((resolve) => { resolveLang = resolve; })
        )

        render(
            <LanguageWrapper>
                <div>child</div>
            </LanguageWrapper>
        )
        expect(screen.queryByText('child')).toBeNull();

        resolveLang!();
        await waitFor(() => {
            expect(screen.queryByText('child')).toBeInTheDocument()
        })
    })
})
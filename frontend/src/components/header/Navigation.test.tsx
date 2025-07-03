import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Navigation from './Navigation'
import { usePathname } from 'next/navigation'
import { changeLanguage } from 'i18next'
import { useTranslation } from 'react-i18next'
import { UseUser } from 'app/context/UseProvider'

jest.mock('next/link', () => ({children}: any) => <div>{children}</div>)

jest.mock('next/image', () =>({props}: any) => <div>{...props}</div>)

jest.mock('next/navigation', () =>({
    usePathname: () => '/', 
}))

jest.mock('../../utils/i18n', () => ({
    changeLanguage: jest.fn(),
    language: 'en',
}))

jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key
    })
}))

jest.mock('../../app/context/UseProvider', () => ({
    UseUser: () => ({
        isLoginModalOpen: false,
        setIsLoginModalOpen: jest.fn()
    })
}))
describe('navigation', () => {
    it('renders heading and language selectors' ,() => {
        render(<Navigation />)
        expect(screen.getByText('header.heading')).toBeInTheDocument()
        expect(screen.getByRole('combobox')).toBeInTheDocument
    })

    it('calls the i18n chngelanguage when the language is chcanged', () => {
        const i18n = require('utils/i18n')
        render(<Navigation />)
        fireEvent.change(screen.getAllByRole('combobox')[0], {
            target: {value: 'ka'},
        })
        expect(i18n.chngelanguage).toHaveBeenLastCalledWith('ka')
    })
    it('toggles theme when the toggle button is clicked', () => {
        render(<Navigation />)
        const themeButton = screen.getAllByTitle(/change theme/i)[0] 
        fireEvent.click(themeButton)
    })
})


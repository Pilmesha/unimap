import React from 'react'
import ThemeWrapper from './ThemeWrapper'
import { render } from '@testing-library/react'


describe('theme wrapper', () => {
    beforeEach(() => {
        document.body.className = ''
        localStorage.clear()
    })

    it('applies dark-mode when the theme is dark mode in the localstoreage', () => {
        localStorage.setItem('theme', 'dark')
        render(
            <ThemeWrapper>
                <div>child</div>
            </ThemeWrapper>
        )
        expect(document.body.classList.contains('dark-mode')).toBe(true)
        expect(document.body.classList.contains('light-mode')).toBe(false)
    })

    it('applies the light theme if not theme is set, the light one', () => {
        render(
            <ThemeWrapper>
                <div>light mode</div>
            </ThemeWrapper>
        )
        expect(document.body.classList.contains('light-mode')).toBe(true)
        expect(document.body.classList.contains('dark-mode')).toBe(false)
    })
    it('render childern', () => {
        const { getByText } = render (
            <ThemeWrapper>
                <div>children are rendered</div>
            </ThemeWrapper>
        )
        expect(getByText('children are rendered')).toBeInTheDocument()
    })

})
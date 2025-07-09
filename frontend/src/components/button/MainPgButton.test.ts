/* import React from 'react'
import { render, screen } from '@testing-library/react'
import MainPgButton from './MainPgButton'
import '@testing-library/jest-dom'

jest.useFakeTimers()

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}))

jest.mock('react-icons/pi', () => ({
  PiCursorBold: (props: any) => <svg data-testid="bold" {...props} />,
  PiCursorClickFill: (props: any) => <svg data-testid="click" {...props} />,
}))

describe('MainPgButton', () => {
  it('renders the button with translated text', () => {
    render(<MainPgButton />)
    expect(screen.getByText('mainPage.exploreButton')).toBeInTheDocument()
  })

  it('toggles icon every second', () => {
    render(<MainPgButton />)

    // Initially: click icon is shown
    expect(screen.getByTestId('click')).toBeInTheDocument()

    // Advance 1s: should switch to bold
    jest.advanceTimersByTime(1000)
    expect(screen.getByTestId('bold')).toBeInTheDocument()

    // Advance another 1s: should switch back to click
    jest.advanceTimersByTime(1000)
    expect(screen.getByTestId('click')).toBeInTheDocument()
  })
})
 */
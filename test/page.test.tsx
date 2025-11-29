import { render, screen } from '@testing-library/react'
import Page from '../app/page'
import '@testing-library/jest-dom'

test('renders a heading', () => {
  render(<Page />)
  const heading = screen.getByRole('heading', { name: /To get started, edit the page.tsx file./i })
  expect(heading).toBeInTheDocument()
})

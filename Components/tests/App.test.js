import * as React from 'react'

import { render, screen } from '@testing-library/react'
import { NavBar } from '../NavBar.tsx'

test('renders Listas', () => {
    render(<NavBar />)
    const linkElement = screen.getByText(/Listas/i)
    expect(linkElement).toBeInTheDocument()
})
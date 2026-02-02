// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CastSync title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CastSync/i);
    expect(titleElement).toBeInTheDocument();
});

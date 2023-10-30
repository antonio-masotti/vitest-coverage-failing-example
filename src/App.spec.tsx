import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
    it('renders Vite + React title', () => {
        render(<App />);
        expect(screen.getByText('Vite + React')).toBeInTheDocument();
    });

    it('renders Vite and React logos', () => {
        render(<App />);
        expect(screen.getByAltText('Vite logo')).toBeInTheDocument();
        expect(screen.getByAltText('React logo')).toBeInTheDocument();
    });

    it('increments count when button is clicked', () => {
        render(<App />);
        const button = screen.getByText(/count is/i);
        fireEvent.click(button);
        expect(screen.getByText('count is 1')).toBeInTheDocument();
    });

    it('contains a paragraph about clicking on logos', () => {
        render(<App />);
        expect(screen.getByText(/Click on the Vite and React logos to learn more/i)).toBeInTheDocument();
    });

    it('clicking on the count button should increment the count', () => {
        render(<App />);
        const button = screen.getByText(/count is/i);
        fireEvent.click(button);
        expect(screen.getByText('count is 1')).toBeInTheDocument();
    });
});

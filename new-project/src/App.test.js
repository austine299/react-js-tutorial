import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header logo', () => {
  render(<App />);
  const linkElement = screen.getAllByAltText(/header logo/i);
  expect(linkElement).toBeInTheDocument();
});

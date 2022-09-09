import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i); //regular expression, case insensitve
  expect(linkElement).toBeInTheDocument();
});

test('renders three items', () => {
  render(<App />);
  const listItems = screen.getAllByRole("listitem"); //regular expression, case insensitve
  expect(listItems).toHaveLength(3);
  // expect(listItems.length).toEqual(3);
});

test('renders title', () => {
  render(<App />);
  const title = screen.getByTestId("mytestid1");
  expect(title).toBeInTheDocument(3);
});


test('sum should be 6', () => {
  render(<App />);
  const sum = screen.getByTitle("sum");
  expect(sum.textContent).toEqual("6");
});



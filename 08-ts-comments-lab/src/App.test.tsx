import React from 'react';
import { render } from '@testing-library/react';
import Comments from './Comments';

test('renders learn react link', () => {
  const { getByText } = render(<Comments />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

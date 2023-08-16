import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CustomModal from './CustomModal';

describe('CustomModal', () => {
  test('renders correctly with props', () => {
    const onClose = jest.fn();
    const { getByText } = render(
      <CustomModal show={true} onClose={onClose}>
        <div>Modal Content</div>
      </CustomModal>
    );

    // Check if modal content is rendered
    expect(getByText('Modal Content')).toBeInTheDocument();
  });

  test('calls onClose when close button is clicked', () => {
    const onClose = jest.fn();
    const { getByLabelText } = render(
      <CustomModal show={true} onClose={onClose}>
        <div>Modal Content</div>
      </CustomModal>
    );

    // Click the close button
    fireEvent.click(getByLabelText('Close'));

    // Check if onClose is called
    expect(onClose).toHaveBeenCalled();
  });
});

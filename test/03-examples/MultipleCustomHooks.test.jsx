import { fireEvent, prettyDOM, render, renderHook, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';
import { act } from 'react-dom/test-utils';

act;

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks/>', () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Debe mostrar el componente por defecto', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText('Loading...'));

    const nextButton = screen.getByRole('button', { name: 'Next Title' });

    expect(nextButton.disabled).toBeTruthy();
  });

  test('Debe mostrar un Title', () => {
    useFetch.mockReturnValue({
      data: [{ title: 'Hola Mundo', price: 500 }],
      isLoading: false,
      hasError: null
    });
    render(<MultipleCustomHooks />);

    screen.debug();
  });

  test('Debe llamar la funcion de incrementar', () => {
    useFetch.mockReturnValue({
      data: [{ title: 'Hola Mundo', price: 500 }],
      isLoading: false,
      hasError: null
    });
    render(<MultipleCustomHooks />);

    const nextButton = screen.getByRole('button', { name: 'Next Title' });

    act(() => {
      fireEvent.click(nextButton);
    });

    expect(mockIncrement).toHaveBeenCalled();
  });
});

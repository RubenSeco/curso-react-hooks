import { getByLabelText, getByRole, render, screen } from '@testing-library/react';
import { MainApp } from '../../src/09-useContext/MainApp';
import { MemoryRouter } from 'react-router-dom';

describe('Probar el componente MainApp', () => {
  test('Debe mostrar el HomePage', () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText('HomePage')).toBeTruthy();
  });

  test('Debe mostrar el LoginPage', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp />
      </MemoryRouter>
    );

    screen.debug();
    expect(screen.getByText('LoginPage')).toBeTruthy();
  });
});

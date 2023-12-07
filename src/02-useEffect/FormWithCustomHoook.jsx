import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {

  const { formState, onInputChange, username, email, password , onResetForm} = useForm({
    username: '',
    email: '',
    password: ''
  });

  // const { username, email, password } = formState;

  return (
    <>
      <h1>Formulario con Custom Hook</h1>
      <hr />
      <input
        type='text'
        className='form-control'
        placeholder='Username'
        name='username'
        value={username}
        onChange={onInputChange}
      />
      <br />
      <input
        type='email'
        className='form-control'
        placeholder='ruben@google.com'
        name='email'
        value={email}
        onChange={onInputChange}
      />
      <br />
      <input
        type='password'
        className='form-control'
        placeholder='Contraseña'
        name='password'
        value={password}
        onChange={onInputChange}
        autoComplete='off'
      />
      
      <button
        onClick={onResetForm}
        className='btn btn-primary mt-5'>
        Borrar
      </button>
    </>
  );
};

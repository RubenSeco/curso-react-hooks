import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {
  const { onInputChange, description, onResetForm } = useForm({
    description: ''
  });

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false
    };

    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        placeholder='Que hay que hacer?'
        className='form-control'
        type='text'
        name='description'
        onChange={onInputChange}
        value={description}
      />
      <button
        type='submit'
        className='btn btn-outline-primary mt-2'>
        Agregar
      </button>
    </form>
  );
};

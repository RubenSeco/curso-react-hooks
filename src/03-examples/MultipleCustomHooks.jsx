import { useFetch } from '../hooks/useFetch';

export const MultipleCustomHooks = () => {
  const { data, isLoading, hasError } = useFetch('https://fakestoreapi.com/products/3');

  const { title, price} = data;

  return (
    <>
      <h1>Fake Store API</h1>
      <hr />

      {isLoading ? (
        <div className='alert alert-info text-center'>Loading...</div>
      ) : (
        <blockquote className='blockquote text-end'>
            <p className='mb-1'>{title}</p>
            <br />
          <footer className='blockquote-footer'>{price}</footer>
        </blockquote>
      )}
    </>
  );
};

import { useCounter, useFetch } from '../hooks';
import { LoadingQuote } from './LoadingQuote';
import { Quote } from './Quote';

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://fakestoreapi.com/products/${counter}`
  );

  const { title, price } = !!data && data;

  return (
    <>
      <h1>Fake Store API</h1>
      <hr />

      {isLoading ? (
        <LoadingQuote />
      ) : (
        <Quote
          title={title}
          price={price}
        />
      )}

      <button
        className='btn btn-primary'
        disabled={isLoading}
        onClick={() => increment()}>
        Next Title
      </button>
    </>
  );
};

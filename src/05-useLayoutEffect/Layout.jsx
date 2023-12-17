import { useCounter, useFetch } from '../hooks';
import { LoadingQuote } from '../03-examples/LoadingQuote';
import { Quote } from '../03-examples/Quote';

export const Layout = () => {
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
        onClick={() => increment()}>
        Next Title
      </button>
    </>
  );
};

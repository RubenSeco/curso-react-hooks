import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Pruebas en todoReducer', () => {

  const initialSate = [{

    id: 1,
    description: "Demo Todo",
    done: false,
  }];

  test('Debe regresar el estado inicial', () => {

    const newState = todoReducer(initialSate, {});
    expect(newState).toBe(initialSate);

  });

  test('Debe agregar un todo', () => {

    const action = {
      type: "[TODO] Add Todo",
      payload: {
        id: 2,
        description: "Nuevo Todo",
        done: false
      }

    };
    const newState = todoReducer(initialSate, action);

    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);

  });

  test('Debe eliminar un TODO', () => {

    const action = {
      type: "[TODO] Remove Todo",
      payload: 1

    };
    const newState = todoReducer(initialSate, action);

    expect(newState.length).toBe(0);


  });


  test('Debe realizar el Toggle del todo', () => {

    const action = {
      type: "[TODO] Toggle Todo",
      payload: 1

    };

    const [{ done }] = todoReducer(initialSate, action);

    expect(done).toBe(true);
  });

});

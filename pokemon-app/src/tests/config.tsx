import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import pokemonReducer from '../features/pokemon/pokemonSlice';

export const renderWithStateMgmt = (ui: any, { actions = [] } = {}) => {
  const store = configureStore({
    reducer: {
        pokemons: pokemonReducer
    },
  });
  actions.forEach((action) => store.dispatch(action)); // highlight-line

  const renderResult = render(<Provider store={store}>{ui}</Provider>);
  return {
    ...renderResult,
    store,
  };
};
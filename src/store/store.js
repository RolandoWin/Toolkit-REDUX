import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counter';
import { pokemonSlice } from './slices/pokemon';
import { dragonBallSlice} from './slices/dragonBall';
import { todosApi } from './apis';

export const store = configureStore({
  reducer: {
      counter: counterSlice.reducer,
      pokemons: pokemonSlice.reducer,
      dragonBalls: dragonBallSlice.reducer,

      [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  .concat( todosApi.middleware )
})
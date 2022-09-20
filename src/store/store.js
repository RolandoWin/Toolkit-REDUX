import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counter';
import { pokemonSlice } from './slices/pokemon';
import { dragonBallSlice} from './slices/dragonBall';

export const store = configureStore({
  reducer: {
      counter: counterSlice.reducer,
      pokemons: pokemonSlice.reducer,
      dragonBalls: dragonBallSlice.reducer,
  },
})
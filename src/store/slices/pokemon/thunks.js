import { startLoadingPokemons } from './pokemonSlice';

export const getPokemons = ( page = 0 ) => {

    return async ( dispatch, getState ) => {

        dispatch( startLoadingPokemons() );

        //TODO: realizar petición HTTP

        //dispatch( setPokemons() );

    }
}
import { pokemonApi } from '../../../api/pokemonApi';
import { startLoadingDragonBalls, setDragonBalls } from './dragonBallSlice';

export const getDragonBalls = ( page = 0 ) => {

    return async ( dispatch, getState ) => {

        dispatch( startLoadingDragonBalls() );

        //TODO: realizar petición HTTP
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10}`);
        // const data = await resp.json();
        //console.log(data);
        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`)
        
        dispatch( setDragonBalls({ dragonBalls: data.results, page: page + 1 }) );        

    }
}
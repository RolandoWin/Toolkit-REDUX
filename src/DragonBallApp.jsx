import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDragonBalls } from './store/slices/dragonBall';

export const DragonBallApp = () => {

    const dispatch = useDispatch();
    const { isLoading, dragonBalls = [], page } = useSelector( state => state.dragonBalls );
    
    //console.log(variable);

    useEffect(() => {        
        dispatch( getDragonBalls() );        
    }, [])

    return (
        <>
            <h1>DragonBallApp</h1>
            <hr/>
            <span>Loading: { isLoading  ? 'True' : 'False' }</span>

            <ul>
                {                     
                    dragonBalls.map( ({ name }) => (
                        <li key={ name } >{ name }</li>
                        //console.log(name);
                    ))
                    //pokemons.length
                }                
            </ul>

            <button 
                disabled={ isLoading } 
                onClick={ () => dispatch( getDragonBalls(page) ) }
            >
                Next
            </button>
        </>
    )
}

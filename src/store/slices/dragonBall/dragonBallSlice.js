import { createSlice } from '@reduxjs/toolkit';

export const dragonBallSlice = createSlice({
    name: 'dragonBall',
    initialState: {
        page: 0,
        dragonBalls: [], 
        isLoading: false,
    },
    reducers: {
        startLoadingDragonBalls: (state, /* action */ ) => {
            //! https://react-redux.js.org/tutorials/quick-start
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.isLoading = true;
        },
        setDragonBalls: ( state, action ) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.dragonBalls = action.payload.dragonBalls;
        }
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingDragonBalls, setDragonBalls } = dragonBallSlice.actions;
import { createStore } from 'redux'
import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {
    counter: 0,
    showCounter: false
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        incrementBy2(state, action) {
            state.counter = state.counter + action.payload
        },
        decrementBy2(state, action) {
            state.counter = state.counter - action.payload
        },
        toggle(state) {
            state.showCounter = !state.showCounter;

        }
    }
})

const store = configureStore({
    reducer: counterSlice.reducer
    // {counter:counterSlice.reducer}
})


//Action creator-return an object with unique identifier
export const counterActions = counterSlice.actions
export default store
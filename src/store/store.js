import { createStore } from 'redux'
import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialCounterState = {
    counter: 0,
    showCounter: false
}

const initialAuthState = {
    isAuthenticated: false
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
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

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        }
    }
})

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
})


//Action creator-return an object with unique identifier
export const authActions = authSlice.actions
export const counterActions = counterSlice.actions
export default store
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counterSlice'
import todoReducer from './features/toDoSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todoReducer
    }
})
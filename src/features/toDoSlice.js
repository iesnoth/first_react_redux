import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

export const toDoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        clearAll: () => {
            return {
                items: []
            }
        },
        addTodo: (state, action) => {
            return {
                items: [...state.items, action.payload]
            }
        },
        removeOne: (state, action) => {
            console.log(action)
            //the list of items we have so far
            let array = [...state.items]
            //the payload is the clicked on item
            let index = action.payload
            //if the index isn't -1 (meaning something in the list has been clicked)
            //the clicked on element will be spliced from the array, and the array returned without it
            if (index !== -1) {
                array.splice(index, 1)
                return { items: array }
            }
        }
    }
})

export const {clearAll, addTodo, removeOne} = toDoSlice.actions

export default toDoSlice.reducer
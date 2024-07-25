import { createSlice,nanoid } from "@reduxjs/toolkit";

// creating an initial state of a slice
const initialState = {
    todos: [{id:1,
        text: "Hello World"
    }]
}

// creating a slice

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state,action) => {
            const todo = {
                // nanoid() is used to generate a unique id
                id:nanoid(),
                // payload is an object with various props such as text,id etc.
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
}
})

export const {addTodo,removeTodo} = todoSlice.actions 

export default todoSlice.reducer

/* A Slice is always created using createSlice() method and it has
 * the properties name , intialState , reducers by default in it.
 * Reducers are the functions that define how the state can be updated
 * similar to the functions used in Context Api . Now reducers have two 
 * props by default names state and action , where state gives access to 
 * values of props of the current state whereas action gives some values to the
 * reducer function which can be dispatched to update the state.
 */
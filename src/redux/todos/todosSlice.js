import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [
    { id: 1, completed: false, text: "Hello world!" },
    { id: 2, completed: false, text: "Веномечеинесама" }
]

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(text) {
                return {
                    payload: {
                        id: nanoid(),
                        completed: false,
                        text,
                    },
                };
            },
        },
        removeTodo: {
            reducer(state, action) {
                return state.filter(todo => todo.id !== action.payload);
            },
            prepare(id) {
                return {
                    payload: id,
                };
            },
        },
        toggleTodo: {
            reducer(state, action) {
                const todo = state.find(todo => todo.id === action.payload);
                if (todo) {
                    todo.completed = !todo.completed;
                }
            },
            prepare(id) {
                return {
                    payload: id,
                };
            },
        },
    },
});

export default todosSlice;

export const { addTodo } = todosSlice.actions;
export const { toggleTodo } = todosSlice.actions;
export const { removeTodo } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos } from "./todosOperations";

const initialState = {
  error: null,
  loading: false,
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  // reducers: {
  //   addToDo: {
  //     reducer(state, action) {
  //       state.push(action.payload); // Можна мотувати, бо є immer
  //     },
  //     prepare(text) {
  //       return {
  //         payload: {
  //           id: nanoid(),
  //           comleted: false,
  //           text,
  //         },
  //       };
  //     },
  //   },
  // },
  extraReducers: builder => {
    builder.addCase(fetchTodos.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = action.payload;
    });
  },
});

// export default todosSlice;

// export const { addToDo } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;

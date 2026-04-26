import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "filters",
    initialState: "all",
    reducers: {
    toggleFilter: {
        reducer(state, action) {
           return state = action.payload;
        },
        prepare(textFilter) {
            console.log(textFilter);
            return {
                payload: textFilter,
            };
        },
    },
},
});

export default filtersSlice.reducer;
export const { toggleFilter } = filtersSlice.actions;   
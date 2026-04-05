// Мозок нашого додатку(Обчислення та перезапис)

import { ACTION_TYPES } from "./constants";

const baseState = [
  { id: 1, complete: false, text: "Study Redux" },
  { id: 2, complete: false, text: "Study Redux" },
];

const todoReducer = (state = baseState, action) => {
  switch (action.type) {
    case ACTION_TYPES.add:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default todoReducer;

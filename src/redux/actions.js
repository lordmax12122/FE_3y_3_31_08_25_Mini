// Всі події які відбуваються на нашому сайті описуються тут

import { nanoid } from "nanoid";
import { ACTION_TYPES } from "./constants";

// Action return {type,payload}

export const addTodo = text => {
  return {
    // reducerName/ActionName
    type: ACTION_TYPES.add,
    payload: {
      id: nanoid(),
      complete: false,
      text: text,
    },
  };
};

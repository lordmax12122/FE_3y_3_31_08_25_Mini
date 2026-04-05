// Точка збору де ми збираємо повністю все що стосується редаксу

import { devToolsEnhancer } from "@redux-devtools/extension";
import { createStore } from "redux";
import todoReducer from "./reducer";

// npm install @redux-devtools/extension - для підʼєднання інструментів розробника для старих версій редаксу

const enhancer = devToolsEnhancer();

export const store = createStore(todoReducer, enhancer);

const getVisibleTodos = (state) => {
    const filter = state.filters;
    const todos = state.todos;

    switch (filter) {
        case "completed":
            return todos.filter(todo => todo.completed);
        case "active":
            return todos.filter(todo => !todo.completed);
        default:
            return todos;
    }
};

export const getFilter = state => state.filters;
export default getVisibleTodos;

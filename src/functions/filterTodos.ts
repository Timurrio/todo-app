import { todo, todoState, tabState } from "../types/todo"

export default function filterTodos(todos: todo[], tab: tabState) {
    console.log('todos are filtered')
    switch (tab) {
        case 'all-todos': return todos;
        case 'active-todos': return todos.filter((todo) => todo.state == todoState.active);
        case 'completed-todos': return todos.filter((todo) => todo.state == todoState.completed);
        default: return todos;
    }

}
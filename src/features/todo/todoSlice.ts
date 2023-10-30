import { createSlice } from '@reduxjs/toolkit'
import { todo, todoState } from '../../types/todo'

export interface todoSliceState {
    todos: todo[]
}

const initialState: todoSliceState = {
    todos: [
        { id: 1, state: todoState.active, task: 'Task 1' },
        { id: 2, state: todoState.active, task: 'Task 2' },
        { id: 3, state: todoState.active, task: 'Task 3' },
    ]
}

const todoSlice = createSlice({
    name: 'todo',
    reducers: {
        createTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((td) => td.id !== action.payload.id)
        },
        changeStateTodo: (state, action) => {
            const todo = state.todos.find((td) => td.id === action.payload.id)
            if (todo) {
                todo.state === todoState.active
                    ?
                    todo.state = todoState.completed
                    :
                    todo.state = todoState.active
            }
        },
        clearCompletedTodos: (state) => {
            state.todos = state.todos.filter((todo) => todo.state != todoState.completed)
        }
    },
    initialState,

})

export const { createTodo, removeTodo, changeStateTodo, clearCompletedTodos } = todoSlice.actions
export default todoSlice.reducer
import React from 'react'
import { todo } from '../types/todo'

interface TodosCounterProps {
    todos: todo[]
}

export default function TodosCounter({ todos }: TodosCounterProps) {
    return (
        <p>{todos.length} tasks left</p>
    )
}

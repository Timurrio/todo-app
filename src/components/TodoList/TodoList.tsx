import { memo } from 'react'
import { todo } from '../../types/todo'
import TodoListItem from './TodoListItem/TodoListItem'
import styles from './TodoList.module.scss'

interface TodoListProps {
    todos: todo[]
}

const TodoList = memo(function TodoList({ todos }: TodoListProps) {
    return (
        <div className={styles.todoList__container}>
            {
                todos.map((todo) => (
                    <TodoListItem todo={todo} key={todo.id} />
                ))
            }
        </div>
    )
})

export default TodoList
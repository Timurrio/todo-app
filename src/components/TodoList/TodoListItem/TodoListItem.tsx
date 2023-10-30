import { memo } from 'react'
import { todo } from '../../../types/todo'
import styles from './TodoListItem.module.scss'
import CheckedButton from '../../UI/CheckedButton/CheckedButton'
import { removeTodo } from '../../../features/todo/todoSlice'
import { useDispatch } from 'react-redux'

interface TodoListItemProps {
    todo: todo
}

const TodoListItem = memo(function TodoListItem({ todo }: TodoListItemProps) {
    const dispatch = useDispatch()

    return (
        <div className={`${styles.todoList__item} ${todo.state == 'completed' ? styles.completed : ''}`}>
            <CheckedButton todo={todo} />
            <p className={styles.task}>{todo.task}</p>
            <svg onClick={() => dispatch(removeTodo(todo))} className={styles.clear_button} xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" /></svg>
        </div>
    )
})

export default TodoListItem

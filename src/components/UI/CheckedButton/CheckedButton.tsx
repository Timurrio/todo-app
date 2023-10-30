import React from 'react'
import styles from './CheckedButton.module.scss'
import { todo, todoState } from '../../../types/todo'
import { useDispatch } from 'react-redux'
import { changeStateTodo } from '../../../features/todo/todoSlice'

interface CheckedButtonProps {
    todo: todo
}

export default function CheckedButton({ todo }: CheckedButtonProps) {
    const dispatch = useDispatch()


    return (
        <div className={`${styles.button_wrapper} ${todo.state == todoState.completed ? styles.active : ''}`} onClick={() => dispatch(changeStateTodo(todo))}>
            <div className={styles.button} >
                <svg xmlns="http://www.w3.org/2000/svg" width='11' height='9'><path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6" /></svg>
            </div>
        </div>
    )
}

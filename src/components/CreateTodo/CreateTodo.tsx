import { useState, memo } from 'react'
import { todo, todoState } from '../../types/todo'
import styles from './CreateTodo.module.scss'
import { createTodo } from '../../features/todo/todoSlice'
import { useDispatch } from 'react-redux'

const CreateTodo = memo(function CreateTodo() {
    const [inputText, setInputText] = useState('')
    const dispatch = useDispatch()

    function submitTodo() {
        if (inputText != '') {
            const newTodo = { id: new Date().getMilliseconds(), state: todoState.active, task: inputText }
            dispatch(createTodo(newTodo))
            setInputText('')
        }
    }

    return (
        <div className={styles.createTodo__container}>
            <div className={styles.submit__wrapper}>
                <div className={styles.submit} onClick={submitTodo}>
                    <svg xmlns="http://www.w3.org/2000/svg" width='11' height='9'><path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6" /></svg>
                </div>
            </div>
            <input className={styles.input} value={inputText} onChange={e => setInputText(e.target.value)} type="text" placeholder='Create new todo...' />
        </div>
    )
})

export default CreateTodo

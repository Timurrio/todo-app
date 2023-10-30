import { memo } from 'react'
import TodosCounter from '../TodosCounter'
import TodoTabs from '../TodoTabs/TodoTabs'
import { tabState, todo, todoState } from '../../types/todo'
import styles from './MainSectionFooter.module.scss'
import { useDispatch } from 'react-redux'
import { clearCompletedTodos } from '../../features/todo/todoSlice'

interface MainSectionFooterProps {
    displayedTodos: todo[],
    currentTab: tabState,
    setTab: React.Dispatch<React.SetStateAction<tabState>>,
}

const MainSectionFooter = memo(function MainSectionFooter({ displayedTodos, currentTab, setTab }: MainSectionFooterProps) {
    const dispatch = useDispatch()

    return (
        <div className={styles.footer__container}>
            <TodosCounter todos={displayedTodos} />
            <TodoTabs currentTab={currentTab} setTab={setTab} />
            <p className={styles.clearCompletedButton} onClick={() => dispatch(clearCompletedTodos())}>Clear Completed</p>
        </div>
    )
})

export default MainSectionFooter
import { memo } from 'react'
import { tabState } from '../../types/todo'
import styles from './TodoTabs.module.scss'

interface TodoTabsProps {
    currentTab: tabState
    setTab: React.Dispatch<React.SetStateAction<tabState>>
}

const TodoTabs = memo(function TodoTabs({ currentTab, setTab }: TodoTabsProps) {
    return (
        <div className={styles.todoTabs__container}>
            <p className={`${styles.tab} ${currentTab == 'all-todos' ? styles.active : ''}`} onClick={() => setTab('all-todos')}>All</p>
            <p className={`${styles.tab} ${currentTab == 'active-todos' ? styles.active : ''}`} onClick={() => setTab('active-todos')}>Active</p>
            <p className={`${styles.tab} ${currentTab == 'completed-todos' ? styles.active : ''}`} onClick={() => setTab('completed-todos')}>Completed</p>
        </div>
    )
})

export default TodoTabs
import { useMemo, useState } from 'react'
import './styles/App.scss'
import { useSelector } from 'react-redux'
import { todo, tabState } from './types/todo';
import filterTodos from './functions/filterTodos';
import TodoList from './components/TodoList/TodoList';
import CreateTodo from './components/CreateTodo/CreateTodo';
import MainSectionFooter from './components/MainSectionFooter/MainSectionFooter';
import MainSectionHeader from './components/MainSectionHeader/MainSectionHeader';
import { RootState } from './store';


function App() {
  const [theme, setTheme] = useState('theme-dark');
  const todos = useSelector<RootState, todo[]>((state) => state.todo.todos)
  const [tab, setTab] = useState<tabState>('all-todos')
  const displayedTodos = useMemo<todo[]>(() => filterTodos(todos, tab), [todos, tab])


  return (
    <div className={"App" + ` ${theme}`}>
      <div className="background-image" />

      <div className="main-section">
        <MainSectionHeader theme={theme} setTheme={setTheme} />
        <CreateTodo />
        <TodoList todos={displayedTodos} />
        <MainSectionFooter currentTab={tab} displayedTodos={displayedTodos} setTab={setTab} />
      </div>

    </div>
  )
}

export default App

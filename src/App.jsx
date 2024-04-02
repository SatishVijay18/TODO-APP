import  { createRoot } from 'react-dom/client'
import TodoList from './TodoList'
import './index.css'

const App = () => {
  return(
    <div className='main-container'>
      <TodoList />
    </div>
  )
  }

  const container = document.getElementById('root')  ;
  const root = createRoot(container) ;
  root.render(<App/>) ;



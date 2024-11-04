import { useEffect, useState } from "react"
import { TodoList } from "./components/TodoList"
import './app.css'


function App() {
  const todosFromStorage = window.localStorage.getItem('todo-list')
  const [todos, setTodos] = useState(() => {
    todosFromStorage ?? []
    return todosFromStorage ? JSON.parse(todosFromStorage) : []
  })
  const [input, setInput] = useState('')

  useEffect(() => {
    window.localStorage.setItem('todo-list', JSON.stringify(todos))
  }, [todos])

  const addTodo = (newTodo) => {
    setTodos([...todos, {
      id: Date.now(),
      title: newTodo,
    }])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(!input.trim()) return
    addTodo(input.trim())
    setInput('')
  }

  const handleDeleteTodo = (id) => {
    const filteredTodos = todos.filter(todo => todo.id !== id)
    setTodos(filteredTodos)
  }

  return (
    <>
      <section>
        <div className="todo-introduction">
          <h1 className="todo-title">TODO LIST</h1>
          <p className="todo-description">Create your todos to remember which activities have to be done in time.</p>
          <form className="todo-form" onSubmit={handleSubmit}>
            <input className="todo-input" value={input} name="title" onChange={(e) => setInput(e.target.value)} placeholder="example: Create a project en React..."/>
            <button type="submit">Add Todo</button>
          </form>
        </div>
       
        <div className="todo__list-container">
          {
            todos.length === 0 && <p style={{textAlign:'center', color: '#dd1'}}>Ninguna tarea por realizar, en espera de nuevas tareas</p>
          }
          {
            todos.map((todo, todoIndex) => (
              <TodoList key={todo.id} title= {todo.title} todoId={todo.id} handleDeleteTodo = {handleDeleteTodo}/>
            ))
          }
        </div>
        

      </section>
    </>
  )
}

export default App

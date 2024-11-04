
export function TodoList({title, handleDeleteTodo, todoId}) {
  return (
    <div className="todo__list--item">
      <p className="todo__item-title">
      {title}
      </p>
      <button type="button" className="btn-delete" onClick={() => handleDeleteTodo(todoId)}>
        <i className="fa-solid fa-delete-left"></i>
      </button>
    </div>
  )
}

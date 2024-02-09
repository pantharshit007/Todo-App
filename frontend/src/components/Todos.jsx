function Todos({ todos, setTodos }) {
  function clickHandler(id) {
    fetch('http://localhost:3000/completed', {
      method: 'PUT',
      body: JSON.stringify({
        id: id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(async function (response) {
        const data = await response.json();
        alert('Todo Done');
      });
  }

  return (
    <div className='currentTodo'>
      {todos.map(function (todo) {
        return (
          <div key={todo._id} >
            <h2>{todo.title}</h2>
            <h3>{todo.description}</h3>
            <button onClick={() => clickHandler(todo._id)}>
              {todo.completed ? 'Done' : 'Mark Done'}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Todos;
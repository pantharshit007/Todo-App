import React from 'react'

function Todos({todos}) {
  return (
    <div>
    {
        todos.map(function (todos) {
            return (
            <div>
                <h2>{todos.title}</h2>
                <h3>{todos.description}</h3>
                <button onClick={()=> todos.completed = !todos.completed}>
                    {todos.completed ? 'Done' : 'Mark Done'}
                </button>
            </div>)
            
        })
    }
        
    </div>
  )
}

export default Todos
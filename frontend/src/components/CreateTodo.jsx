import React from 'react'

function CreateTodo() {
  return (
    <div>
        <input type="text" placeholder='title'/><br></br>
        <input type="text" placeholder='description'/><br />
            <br />

        <button>Add </button>
        {/* <label htmlFor="todoCompleted">Completed</label>
        <input type="checkbox" name="Completed" id="todoCompleted" /> */}
    </div>
  )
}

export default CreateTodo
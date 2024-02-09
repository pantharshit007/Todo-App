import React, { useState } from 'react'

function CreateTodo() {

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  function clickHandler(){
    fetch('http://localhost:3000/todo',{
      method: 'POST',
      body: JSON.stringify({
        title: title,
        description: desc,
      }),
      headers: {
        "content-type": "application/json",
      }
    })
    .then( async function (response) {
      const data = await response.json();
      alert('Todo Added');
    })
  }
  return (
    <div>
        <input type="text" placeholder='title' id='title' 
          onChange={(eve)=>{setTitle(eve.target.value) }} 
          /><br></br>
        <input type="text" placeholder='description' id='desc'
          onChange={(eve)=>{setDesc(eve.target.value) }}
          /><br />

        <button onClick={clickHandler}>Add </button>
        {/* <label htmlFor="todoCompleted">Completed</label>
        <input type="checkbox" name="Completed" id="todoCompleted" /> */}
    </div>
  )
}

export default CreateTodo
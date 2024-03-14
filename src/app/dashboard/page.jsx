"use client"
import React, { useState } from 'react'
import style from './dashBoard.module.css'

const Register = () => {
  const [addTodo, setAddTodo] = useState([])
  const [newTodo, setnewTodo] = useState("")

  const addChange = (event) => {
    setnewTodo(event.target.value)
  }

  const addTask = () => {
    setAddTodo([...addTodo, newTodo])
  }
  return (
    <div className={style.addTask}>
      <input type="text" onChange={addChange} />
      <button onClick={addTask}>Add Task</button>
      <div>
        {addTodo.map((todo, key) => {
          return(
            <h2 key={key}>{todo}</h2>

          )
        })}
      </div>
    </div>
  )
}

export default Register;
import React from 'react'

import TodoItem from '../TodoItem'

import './style.css'

export default function TodoList({todos,...otherProps}) {
    return (
        <div className="container">
            {todos.map((el)=>(
                <TodoItem todo={el} key={el.id.toString()} {...otherProps}></TodoItem>
            ))}
        </div>
    )
}

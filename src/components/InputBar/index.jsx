import React from 'react'

import './style.css'

export default function InputBar({handelChange,handelAddClick,value}) {
    return (
        <div>
             <input className="input__todo"
              type="text"
              name="todo"
              value={value}
              placeholder="todo"
              onChange={handelChange} />

             <button className="btn blue" onClick={handelAddClick}>Add</button>
        </div>
    )
}

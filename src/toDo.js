import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, clearAll, removeOne } from './features/toDoSlice'

function ToDo() {
    //the list of items that are the state, pulled from the todo slice
    const items = useSelector((state) => state.todos.items)
    const dispatch = useDispatch()
    //for the onClick event in removeOne
    const [input, setInput] = useState('')
    //maps over the list of items and, when one is clicked on, sends in the removeOne reducer to remove the item
    //based on the assigned index (i)
    const renderItems = items.map((item, i) => <li key={i} onClick={() => dispatch(removeOne(i))}>{item}</li>)
    //adds a new item based on the user input in the text field
    const submitForm = (newInput) => {
        newInput.preventDefault()
        dispatch(addTodo(input))
    }

    return(
        <div>
            {/* tells the form to launch the addToDo reducer upon the submit button being fired */}
            <form onSubmit={(newInput)=>submitForm(newInput)}>
                <input type="text" onChange={(e)=>setInput(e.target.value)}/>
                <button type="submit">Submit to do Item</button>
            </form>
            <ul>
                {renderItems}
            </ul>
            <button onClick={()=> dispatch(clearAll())}>Clear All</button>
        </div>
    )

}

export default ToDo
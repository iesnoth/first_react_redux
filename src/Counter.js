import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//from the slice
import { decrement, increment, incrementByAmount } from "./features/counterSlice";

function Counter() {
    //useSelector will grab the current state var value from store
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    //When developing your own apps, consider the use of any given state variable:
    //Will it be needed by several components?
    //If not, it may be worthwhile to simply declare it local to that component.
    const [input, setInput] = useState(0)

    const byAmountSubmit = (e) => {
        e.preventDefault()
        dispatch(incrementByAmount(Number(input)))
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>
                Increment
            </button>
            <button onClick={() => dispatch(decrement())}>
                Decrement
            </button>
            {/* calling above function and plugging in input */}
            <form onSubmit={(e) => byAmountSubmit(e)}>
                <input type="number" onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Counter
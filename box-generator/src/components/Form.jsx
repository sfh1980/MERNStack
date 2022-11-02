import React from 'react'
import { useState } from 'react'

const Form = (props) => {

    //state for input
    const [colorName, setColorName] = useState("")
    // const [size, setSize] = useState()

    //input function for synthentic listener for color input field
    const inputFunction = (event) => {
        setColorName(event.target.value)
        
    }

    // //input function for synthentic listener for size input field
    // const sizeFunction = (event) => {
    //     setSize(event.target.value)
    // }

    //form submit funtion synthetic listener
    const submitHandler = (event) => {
        //first, prevent default form behavior
        event.preventDefault()
        // console.log("submitted", colorName)
        props.addBoxColor(colorName)
        // props.changeBoxSize(size)
        //clear whats in state
        setColorName("")
    }


    return (
        <div>
            <form onSubmit={submitHandler}>
                <p>
                color: <input onChange={inputFunction} value={colorName}/> 
                </p>
                {/* <p>
                size: <input onChange={sizeFunction} value={size}/>
                </p> */}
                <button>Add</button>
            </form>

            <p></p>
        </div>
    )
}

export default Form
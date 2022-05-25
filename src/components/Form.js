import React from "react"
import { useState, useEffect } from "react"

function Form(props) {

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const [randomValue, setRandomValue] = useState()

    // Чтобы placeholder НЕ менялся при каждом ререндере - например, при зачеркивании текста
    useEffect(() => { 
        setRandomValue(randomIntFromInterval(1,3))
    }, [randomValue])
    
    var placeholder_text

    switch (randomValue) {
        case 1:
            placeholder_text = "Buy groceries"
            break;
        case 2:  
            placeholder_text = "Conquer the world"
            break;
        case 3:  
            placeholder_text = "Look at some memes"
            break;  
        default:
            console.log("Something went wrong in random placeholer text in component Form")
    }

    return (
        <form onSubmit = {props.addElementForm} className = "form">
            <input 
                type = "text" 
                placeholder = {placeholder_text}
                className = "form-input"

                name = "taskName"
                value = {props.task.taskName}
                onChange = {props.changeFunForm}
            >  
            </input>
            <button className = "form-submit-button">Add!</button>
        </form>  
    )
}

export default Form
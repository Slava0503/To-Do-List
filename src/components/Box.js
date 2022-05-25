import React from "react"

function Box(props) {

    return (
        <div className = "box" onClick = {() => props.crossElementBox(props.elem.id)}> 
            <h1 
                style = {props.elem.styles ? {textDecoration: "line-through"} : {textDecoration: ""}} 
                className = "box-h1"
                >
                {props.elem.text}
                </h1>
            <button 
                className = "box-button" 
                onClick = {() => props.deleteElementBox(props.elem.id)}>
                    <img 
                        className = "box-button-img"
                        src = {process.env.PUBLIC_URL + "/images/check.png"}
                        alt = "button"
                    >
                    </img>
            
            </button>
        </div>
    )
}

export default Box
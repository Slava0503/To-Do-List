import React from "react"

function Header() {

    return (
        <header className = "header">
            <img 
                className = "header-img"
                src = {process.env.PUBLIC_URL + "/images/toto.png"}
                alt = "header"
            >
            </img>
            <h1 className = "header-h1">To Do List</h1>
        </header>
    )
}

export default Header
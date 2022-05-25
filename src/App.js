import React from "react"
import { useState, useEffect} from "react"
import Box from "./components/Box"
import Form from "./components/Form"
import Header from "./components/Header"

var index = JSON.parse(localStorage.getItem("index-storage")) || 0

function App() {

    // Элемент
    const [element, setElement] = useState(JSON.parse(localStorage.getItem("element-storage")) || [])
    
    useEffect(() => {
        localStorage.setItem("element-storage", JSON.stringify(element));
    }, [element]);

    // Индекс
    localStorage.setItem("index-storage", JSON.stringify(index));

    // useState и функции
    const [task, setTask] = useState({
        taskName: "",
    })

    function changeFun(event) {
        const {name, value} = event.target
        setTask(prevTask => {
            return({
                ...prevTask,
                [name]: value
            })
        })
    }

    function addElement(event) {
        event.preventDefault() // Отмена обновления страницы при нажатии на кнопку, у которой onClick = {addElement}. Для этого и event нужен
        
        if (task.taskName.replace(/\s/g, '') !== "") { // Удаляем лишние пробелы, если что-то осталось - продолжаем
            const newItem = { // Новый элемент состоит из текста и id
                text: task.taskName,
                id: index,
                styles: false
            } 
            index = index + 1
            setElement([...element, newItem])
            
            task.taskName = ""
        }
    }
    
    function deleteElement(id) {
        setElement([...element.filter(mapped => mapped.id !== id)]) // Отображаем только те эл-ты, которые по условию ПРОХОДЯТ (их id НЕ равно тому, кнопку которого нажали)
    }

    function crossElement(id) {
        setElement(prevElement => {
            return prevElement.map(elemStyle => {
                return (
                    elemStyle.id === id ? {...elemStyle, styles: !elemStyle.styles} : elemStyle //Здесь возвращаются значения именно elemStyle, а не element!!!!
                )
            })
        })
    }

    return (
        <div>
            <Header />
            
            <h2 className = "app-h2">Total number of ToDo-s: {element.length}</h2>

            <Form
                task = {task}
                addElementForm = {addElement}
                changeFunForm = {changeFun}
            />
            
            {element.map(elem => { // Нужно отображать каждый elem в element по отдельности? Иначе проблемы при удалении
                return (
                    <Box 
                        elem = {elem}
                        key = {elem.id} 
                        deleteElementBox = {deleteElement}
                        crossElementBox = {crossElement}
                    />
                )
            })}
                
        </div>
    )
}

export default App
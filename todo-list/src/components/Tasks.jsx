import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button'


const Tasks = (props) => {

    //create state
    const [toDo, setToDo] = useState("")
    const [toDoList, setToDoList] = useState([]);

    const submitHandler = (event) => {
        event.preventDefault()
        if(toDo.length == 0){
            return;
        }
        const todoitem = {
            text:toDo,
            complete:false
        }
        setToDoList([...toDoList, todoitem])
        setToDo("")
        console.log(toDo);
    }

    const inputHandler = (event) => {
        setToDo(event.target.value)
    }

    const deleteHandler = (deleteIndex) => {
        const filteredToDoList = toDoList.filter((toDo, i) => {
            if(i === deleteIndex){
                return false
            }else{
                return true
            }
        })
        setToDoList(filteredToDoList)
    }

    const checkboxHandler = (index) => {
        const updatedToDoList = toDoList.map((toDo, i) => {
            if(index == i){
                toDo.complete = !toDo.complete;
            }
            return toDo;
        })
    setToDoList(updatedToDoList)
    }

    return (
        <div>
            <div>
                <form onSubmit={submitHandler}>
                    <p>
                        <input onChange={inputHandler} value={toDo} style={{marginTop:"20px"}}/>
                    </p>
                    <p>
                        <button style={{backgroundColor:"blue", borderRadius:"5px", color:"white"}}>Add</button>
                    </p>
                </form>
            </div>
            <hr />
            <div>
                {toDoList.map((toDo, i) => {
                    const toDoClasses = ["bold"];
                    if(toDo.complete){
                        toDoClasses.push("line-through");
                    }
                    return (
                        <div key={i}>
                            <span className={toDoClasses.join(" ")}>{toDo.text}</span>
                            <input onChange={(event) => {
                                checkboxHandler(i)
                            }} checked={toDo.complete} type="checkbox" style={{marginLeft: "15px"}}/>
                            <button onClick={(event) => {
                                deleteHandler(i)
                            }} style={{marginLeft:"15px", borderRadius:"5px", backgroundColor:"black", color:"white"}}>Delete</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Tasks
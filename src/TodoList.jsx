import { useState} from "react";
import {v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let [todos, setTodos] = useState([{task: "sample task", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = ()=>{
        setTodos((prevTodos) =>{
            return [...prevTodos,{task: newTodo, id: uuidv4(), isDone:false }];
        });
        setNewTodo("");

    };

    let updateTodoValue = (event) =>{
        setNewTodo(event.target.value);
    };
    let deleteTodo = (id) =>{
        setTodos(todos.filter((todo)=> todo.id != id));
    };

    let upperCaseAll = () =>{
        setTodos((todos)=>
            todos.map((todo)=>{
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                };
            })
        )
    };

    let upperCaseOne = (id) =>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
                if (todo.id == id){
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                };
            } else {
                return todo;
            }
            })
        )
    };


    
    let markAllDone = () =>{
        setTodos((prevTodos)=>
            todos.map((todo)=>{
                return {
                    ...todo,
                    isDone: true,
                };
            })
        )
    };

    let markAsDoneOne = (id) =>{
        setTodos((prevTodos)=>
            prevTodos.map((todo)=>{
                if (todo.id == id){
                return {
                    ...todo,
                    isDone: true,
                };
            } else {
                return todo;
            }
            })
        )
    };

   
        
    


    return(
        <div>
            <input placeholder="Enter Your Task" value={newTodo} onChange={updateTodoValue} style={{width:"300px",height:"35px",borderRadius:"8px"}}></input>
            
            <button onClick={addNewTask} style={{backgroundColor:"green" ,margin:"10px 10px"}}>Add Task</button>
            <br></br>
            <br></br>
            <br></br>
             
            <hr></hr>
            <h4>Task Todo</h4>
            <ul>
                {
                    todos.map((todo) =>(
                      <li key={todo.id}>
                        <span style = {todo.isDone ? {textDecorationLine:"line-through", textDecorationLineColor:"red"}:{}}>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={()=> deleteTodo(todo.id)} style={{backgroundColor:"red", margin:"2px 2px" }}>Delete</button>
                        <button onClick={()=> upperCaseOne(todo.id)} style={{backgroundColor:"pink", margin:"2px 2px" }}>UpperCase One</button> 
                        <button onClick={()=> markAsDoneOne(todo.id)} style={{backgroundColor:"skyblue", margin:"2px 2px" }}>Mark As Done</button> 
                        </li>

                    ))
                }
            </ul>
            <br></br>
            <button onClick={upperCaseAll} style={{backgroundColor:"gold", margin:"2px 2px" }}>UpperCase All</button>
            <button onClick={markAllDone} style={{backgroundColor:"#789", margin:"2px 2px" }}>Mark All As Done </button>
        </div>
    );
};
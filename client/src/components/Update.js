import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import {useState, useEffect} from "react";
import {useParams,useNavigate} from 'react-router-dom'

import "./Update.css"

function Update() {
const {id}=useParams()
const navi=useNavigate()

const [todo,setTodo]=useState("")
const [upda,setUpdate]=useState("") 

useEffect(()=>{
    axios.get(`http://localhost:8000/todo/${id}`).then((res)=>{
    //    console.log(res.data);
       setTodo(res.data)
   //    navi("/Tabledata")
})},[id])

const up=() =>{
    axios.put(`http://localhost:8000/todo/${id}`,{
        todo:upda
    }).then(()=>{
        navi("/")
        console.log('updated');

    })
}




    return ( 
         <>
        <TextField id="standard-basic" value={upda} placeholder={todo.todo} onChange={(e)=>setUpdate(e.target.value)} sx={{width:"300px"}} label="Enter Todos" variant="standard"/><br></br><br></br>
         <Button variant="contained" onClick={()=>up()} >Update</Button>
         </>
         );
}

export default Update;
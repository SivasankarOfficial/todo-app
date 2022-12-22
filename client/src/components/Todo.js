import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from "react"
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom'

const Todo = () => {
    const navi = useNavigate()


    const [data, setData] = useState([])
    const [task, setTask] = useState("")

    useEffect(() => {
        axios.get("http://localhost:8000/todo").then((res) => {
            //   console.log(res.data);
            setData(res.data)
        })
    }, [data])

    const AddTask = () => {
        if (task === " ") {
            return
        }
        else {
            axios.post("http://localhost:8000/todo", {
                todo: task,
                isComplete: false
            }).then((res) => {
                setTask(" ")
            })
        }
    }
    const Del = (id) => {
        axios.get(`http://localhost:8000/todo/${id}`).then(() => {
            axios.delete(`http://localhost:8000/todo/${id}`)
        })
    }

    const update = (id) => {

        navi(`/Update/${id}`)

    }
    return (
        <>
            <TextField id="standard-basic" autoComplete='off' value={task} onChange={(e) => setTask(e.target.value)} sx={{ width: "300px", margin: "30px 0" }} label="Enter Todos" variant="standard" /><br></br><br></br>
            <Button variant="contained" onClick={AddTask}>Add Todo</Button>

            <Table sx={{ margin: "50px 50px", width: "900px" }}>
                    <TableHead>
                    <TableRow>
                        <TableCell>Todos</TableCell>
                        <TableCell >Edit</TableCell>
                        <TableCell >Delete</TableCell>

                    </TableRow>
                </TableHead>
                {
                    data.length === 0 ? (

                        <TableBody >
                            <TableRow>
                                <TableCell ><h1>No data Found</h1></TableCell>
                                <TableCell ><h1>No data Found</h1></TableCell>
                                <TableCell ><h1>No data Found</h1></TableCell>


                            </TableRow>
                        </TableBody  >
                    )
                        :
                        data.map((dt, index) => (
                            <TableBody key={index} >
                            <TableRow>
                                    <TableCell>{dt.todo}</TableCell>
                                    <TableCell><Button onClick={() => update(dt._id)}><EditIcon /></Button></TableCell>
                                    <TableCell><Button  variant="contained" sx={{ color: "red" }} onClick={() => Del(dt._id)}><DeleteIcon /></Button></TableCell>
                            </TableRow>
                            </TableBody>
                        ))}
            </Table>
        </>
    );
}

export default Todo;
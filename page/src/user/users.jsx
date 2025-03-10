import DeleteData from "../hooks/delete";
import { Button } from "@mui/material";
import GetData from "../hooks/get";
import TaskManager from "../task/taskmanagement";
import AddTask from "../task/add-task";


const UserList = ({users}) => {

    const list=[]
    const {data} = GetData('https://localhost:7113/task/')
    

    users.forEach((user, i) => (
        list.push(
            <div key={i}>
                <h2>{ user.username }</h2>
                <h3>Email: {user.email}</h3>
                <p>Info: {user.info}</p>
                <Button variant="contained" color="signup" onClick={() => DeleteData('https://localhost:7113/user/', user.username)}>delete employee</Button>
                {data && <TaskManager tasks={data} username={user.username}/>}
                <AddTask username={user.username}/>
            </div>
        )
))

    return (
        <>
            <h2>EMPLOYEES</h2>
            <div>
                {list}
            </div>
        </>
    )
}

export default UserList;
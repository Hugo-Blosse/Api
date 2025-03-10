import { useState } from "react";
import {Button, FormControl, InputLabel, OutlinedInput, Stack} from "@mui/material";
import UpdateData from "../hooks/update";
import DeleteData from "../hooks/delete";

const MeetingUpdate = ({task, username}) => {
    const [name, setName] = useState('')
    const [workerName, setWorkerName] = useState(username)
    const [date, setDate] = useState('')
    const [showContent, setShowContent] = useState(false)

    const handleMeetingUpdate = async() => {
        if (name.trim().length === 0 || workerName.trim().length === 0 || date.trim().length === 0) {
          return;
        }
        const t = {
            Id: task.id,
            Name: name,
            Type: task.type,
            WorkerName: workerName,
            TaskInfo: task.taskInfo,
            Discriminator: 1,
            Date: date
        }
        UpdateData('https://localhost:7113/Task/', t, task.id)
            .then(() => {
                setName(t.Name)
                setWorkerName(t.WorkerName)
                setDate(t.Date)
            })
      }
      const handleClick = () =>{
        setShowContent(true)
    }
    return (
        <>
        {!showContent && <Button variant="contained" color="signup" onClick={handleClick}>Update</Button>}
        {showContent &&
          <form onSubmit={handleMeetingUpdate}>
               <Stack>
                    <FormControl required margin="normal">
                       <InputLabel htmlFor="name">Meeting's topic</InputLabel>
                        <OutlinedInput id="name" label="Meeting's topic" value={name} size="small" onChange={e => setName(e.target.value)} />
                    </FormControl>
                    <FormControl required margin="normal">
                        <InputLabel htmlFor="employee">Employee's name</InputLabel>
                        <OutlinedInput readOnly id="employee" label="Employee's name" size="small" value={workerName} onChange={e => setWorkerName(e.target.value)} />
                    </FormControl>
                    <FormControl required margin="normal">
                        <InputLabel htmlFor="date">Meeting's date ex. 01-01-2024</InputLabel>
                        <OutlinedInput id="date" label="Meeting's date ex. 01-01-2024" value={date} onChange={e => setDate(e.target.value)} />
                    </FormControl>
                    <FormControl margin="normal">
                       <Button type="submit" variant="contained" color="limegreen">Update</Button>
                    </FormControl>
                    <FormControl margin="normal">
                        <Button variant="contained" color="delete" sx={{"&.MuiButton-contained":{
                            color: 'black'
                        }}} onClick={() => DeleteData('https://localhost:7113/task/', task.id)}>Delete</Button>
                    </FormControl>
                </Stack>
            </form>}
        </>
    );
}
export default MeetingUpdate;
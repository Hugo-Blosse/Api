import { useState } from "react";
import {Button, FormControl, InputLabel, MenuItem, OutlinedInput, Select, Stack} from "@mui/material";
import UpdateData from "../hooks/update";
import DeleteData from "../hooks/delete";

const ProjectUpdate = ({task, username}) => {
    const [name, setName] = useState('')
    const [workerName, setWorkerName] = useState(username)
    const [priority, setPriority] = useState(1)
    const [date, setDate] = useState('')
    const [showContent, setShowContent] = useState(false)

    const handleProjectUpdate = async() => {
        if (name.trim().length === 0 || workerName.trim().length === 0 || date.trim().length === 0) {
          return;
        }
        const t = {
            Id: task.id,
            Name: name,
            Type: task.type,
            WorkerName: workerName,
            TaskInfo: task.taskInfo,
            Discriminator: 0,
            Date: date,
            Priority: priority
        }
        UpdateData('https://localhost:7113/task/', t, task.id)
            .then(() => {
                setName(t.Name)
                setWorkerName(t.WorkerName)
                setDate(t.Date)
                setPriority(t.Priority)
            })
      }
      const handleClick = () =>{
        setShowContent(true)
    }
    return (
        <>
        {!showContent && <Button variant="contained" color="signup" onClick={handleClick}>Update</Button>}
        {showContent &&
          <form onSubmit={handleProjectUpdate}>
                <Stack>
                    <FormControl required margin="normal">
                       <InputLabel htmlFor="name">Project's topic</InputLabel>
                        <OutlinedInput id="name" label="Project's topic" value={name} size="small" onChange={e => setName(e.target.value)} />
                    </FormControl>
                    <FormControl required margin="normal">
                        <InputLabel htmlFor="employee">Employee's name</InputLabel>
                        <OutlinedInput readOnly id="employee" label="Employee's name" size="small" value={workerName} onChange={e => setWorkerName(e.target.value)} />
                    </FormControl>
                    <FormControl required margin="normal">
                        <InputLabel htmlFor="date">Project's deadline ex. 01-01-2024</InputLabel>
                        <OutlinedInput id="date" label="Project's deadline ex. 01-01-2024" value={date} onChange={e => setDate(e.target.value)} />
                    </FormControl>
                    <FormControl required margin="normal">
                        <InputLabel htmlFor="project">Projet's priority</InputLabel>
                        <Select id="project" label="Projet's priority" onChange={e => setPriority(e.target.value)} size="small" autoWidth defaultValue={1}>
                            <MenuItem value={1}>Low</MenuItem>
                            <MenuItem value={2}>Medium</MenuItem>
                            <MenuItem value={3}>High</MenuItem>
                        </Select>
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
export default ProjectUpdate;
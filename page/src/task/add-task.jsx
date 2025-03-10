import { useState } from "react";
import {Button, FormControl, InputLabel, MenuItem, OutlinedInput, Select, Stack, Container} from "@mui/material";
import PostData from "../hooks/post";

const AddTask = ({username}) => {
    const [name, setName] = useState('')
    const [workerName, setWorkerName] = useState(username)
    const [date, setDate] = useState('')
    const [location, setLocation] = useState('')
    const [priority, setPriority] = useState(1)
    const [type, setType] = useState('Project')
    const [showContent, setShowContent] = useState(false)

    const handleSubmit = () => {
        console.log(type)
        if(type === 'Project')
            handleProjectPost()
        else if(type === 'Meeting')
            handleMeetingPost()
        else if(type === 'Delegation')
            handleDelegationPost()
    }

    const handleProjectPost = async() => {
        if (name.trim().length === 0 || workerName.trim().length === 0 || date.trim().length === 0) {
          return;
        }
        const t = {
            Id: 0,
            Name: name,
            Type: type,
            WorkerName: workerName,
            TaskInfo: 'info',
            Priority: priority,
            Discriminator: 0,
            Date: date
        }
        PostData('https://localhost:7113/task/', t)
            .then(() => {
                setName(t.Name)
                setWorkerName(t.WorkerName)
                setDate(t.Date)
                setPriority(t.Priority)
            })
      }

    const handleMeetingPost = async() => {
        if (name.trim().length === 0 || workerName.trim().length === 0 || date.trim().length === 0) {
          return;
        }
        const t = {
            Id: 0,
            Name: name,
            Type: type,
            WorkerName: workerName,
            TaskInfo: 'info',
            Discriminator: 1,
            Date: date
        }
        PostData('https://localhost:7113/task/', t)
            .then(() => {
                setName(t.Name)
                setWorkerName(t.WorkerName)
                setDate(t.Date)
            })
      }

    const handleDelegationPost = async() => {
        if (name.trim().length === 0 || workerName.trim().length === 0 || date.trim().length === 0 || location.trim().length === 0) {
          return;
        }
        const t = {
            Id: 0,
            Name: name,
            Type: type,
            WorkerName: workerName,
            TaskInfo: 'info',
            Location: location,
            Discriminator: 2,
            Date: date
        }
        PostData('https://localhost:7113/task/', t)
            .then(() => {
                setName(t.Name)
                setWorkerName(t.WorkerName)
                setDate(t.Date)
                setLocation(t.Location)
            })
      }
      const handleClick = () =>{
        setShowContent(true)
    }
    return (
        <Container>
            <Stack>
            <FormControl required margin="normal">
                <InputLabel htmlFor="choose">Choose type</InputLabel>
                <Select id="choose" label="Choose type" onChange={e => setType(e.target.value)} size="small" autoWidth defaultValue={'Project'}>
                    <MenuItem value={'Project'}>Project</MenuItem>
                    <MenuItem value={'Meeting'}>Meeting</MenuItem>
                    <MenuItem value={'Delegation'}>Delegation</MenuItem>
                </Select>
            </FormControl>
            <FormControl required margin="normal">
                {!showContent && <Button variant="contained" color="signup" onClick={handleClick}>Add Task</Button>}
            </FormControl>
            </Stack>
        {showContent &&
          <form onSubmit={handleSubmit}>
                <h3>Add {type}</h3>
                <Stack>
                    <FormControl required margin="normal">
                       <InputLabel htmlFor="name">{type} topic</InputLabel>
                        <OutlinedInput id="name" label="Delegation topic" value={name} size="small" onChange={e => setName(e.target.value)} />
                    </FormControl>
                    <FormControl required margin="normal">
                        <InputLabel htmlFor="employee">Employee's name</InputLabel>
                        <OutlinedInput readOnly id="employee" label="Employee's name" size="small" value={workerName} onChange={e => setWorkerName(e.target.value)} />
                    </FormControl>
                    <FormControl required margin="normal">
                        <InputLabel htmlFor="date">{type}'s {type === "Project"? "deadline":"date"} ex. 01-01-2024</InputLabel>
                        <OutlinedInput id="date" label="Delegation's date ex. 01-01-2024" size="small" value={date} onChange={e => setDate(e.target.value)} />
                    </FormControl>
                {type === 'Delegation' &&
                <FormControl required margin="normal">
                    <InputLabel htmlFor="location">Delegation's location</InputLabel>
                    <OutlinedInput id="location" label="Delegation's location" size="small" value={location} onChange={e => setLocation(e.target.value)} />
                </FormControl>}
                {type === 'Project' && 
                <FormControl required margin="normal">
                    <InputLabel htmlFor="prio">Project's priority</InputLabel>
                    <Select id="prio" label="Project's priority" onChange={e => setPriority(e.target.value)} size="small" autoWidth defaultValue={1}>
                        <MenuItem value={1}>Low</MenuItem>
                        <MenuItem value={2}>Medium</MenuItem>
                        <MenuItem value={3}>High</MenuItem>
                    </Select>
                </FormControl>}
                <Button variant="contained" color="signup" type="submit">Add Task</Button>
                </Stack>
            </form>}
        </Container>
    );
}
export default AddTask;
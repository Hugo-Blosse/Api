import { Container, Stack } from "@mui/material";
import DelegationUpdate from "./update-delegation";
import MeetingUpdate from "./update-meeting";
import ProjectUpdate from "./update-project";
const TaskManager = ({tasks, username}) => {
    const projects = tasks.filter(task =>{
        return task.type === "Project" && task.workerName === username
    })
    const meetings = tasks.filter(task =>{
        return task.type === "Meeting" && task.workerName === username
    })
    const delegations = tasks.filter(task =>{
        return task.type === "Delegation" && task.workerName === username
    })

    const projectList = []
    const meetingList = []
    const delegationList = []
    
    projects.forEach((project, i) =>(
        projectList.push(
            <div key={i}>
                <Container>
                    <Stack>
                        {project.taskInfo}
                        <div style={{marginBottom: '6px'}}></div>
                        <ProjectUpdate task={project} username={username}/>
                    </Stack>
                </Container>
            </div>
        )
    ))
    meetings.forEach((meeting, i) => (
        meetingList.push(
            <div key={i}>
                <Container>
                    <Stack>
                        {meeting.taskInfo}
                        <div style={{marginBottom: '6px'}}></div>
                        <MeetingUpdate task={meeting} username={username}/>
                    </Stack>
                </Container>
            </div>
        )
    ))
    delegations.forEach((delegation, i) => (
        delegationList.push(
            <div key={i}>
                <Container>
                    <Stack>
                        {delegation.taskInfo}
                        <div style={{marginBottom: '6px'}}></div>
                        <DelegationUpdate task={delegation} username={username}/>
                    </Stack>
                </Container>
            </div>
        )
    ))

    return (
        <>
            {tasks && 
            <>
                <h3>Tasks:</h3>
                {projectList}
                {meetingList}
                {delegationList}
            </>
            }
        </>
    )
}
export default TaskManager;
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { Badge } from "@mui/material";
const TaskCalendar = ({data}) => {
    const username = JSON.parse(localStorage.getItem("user")).Username
    console.log(username)
    const dateData = []
    data.forEach((element, i) => {
        if(element.workerName === username)
        {
            dateData.push(<div key={i}>{element.taskInfo}</div>)
        }       
    });
    console.log(dateData)
    const projectsData = data.find(obj =>{
        console.log(obj.workerName)
        return obj.type === "Project" && obj.workerName === username
    })
    const meetingData = data.find(obj => {
        return obj.type === "Meeting" && obj.workerName === username
    })
    const delegationData = data.find(obj => {
        return obj.type === "Delegation" && obj.workerName === username
    })

    const meetingDates = (meetingData !== undefined) ? meetingData.date : ''
    const projectDates = (projectsData !== undefined) ? projectsData.date : ''
    const delegationDates = (delegationData !== undefined) ? delegationData.date : ''
    
    function ServerDay(props) {
        const { delegationDates = [], projectDates = [], meetingDates = [], day, outsideCurrentMonth, ...other } = props;
      
        const deleg =
            !props.outsideCurrentMonth && delegationDates.includes(day.format("DD-MM-YYYY"));
        const proj =
            !props.outsideCurrentMonth && projectDates.includes(day.format("DD-MM-YYYY"));
        const meet =
            !props.outsideCurrentMonth && meetingDates.includes(day.format("DD-MM-YYYY"));
        return (
            <>
            <Badge
                key={props.day.toString()}
                overlap="circular"
                badgeContent={proj ? '🗒️' : undefined}
                anchorOrigin={{vertical: 'bottom',horizontal: 'left'}}
            >
                <Badge
                    overlap="circular"
                    badgeContent={deleg ? '✈️' : undefined}
                    anchorOrigin={{vertical: 'top',horizontal: 'right'}}
                    >
                    <Badge
                        overlap="circular"
                        badgeContent={meet ? '🤝' : undefined}
                        anchorOrigin={{vertical: 'top',horizontal: 'left'}}
                        >
                        <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day}/>
                    </Badge>
                </Badge>
            </Badge>
            
          </>
        );
      }
      


    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
            readOnly
            views={['day']}
            slots={{day: ServerDay}}
            slotProps={{day: {delegationDates, meetingDates, projectDates}}}
            />
            <h2>TASKS LEGEND</h2>
            <div>
                Delegation - ✈️
            </div>
            <div>
                Meeting - 🤝
            </div>
            <div>
                Project deadline - 🗒️
            </div>
            <h3>List of tasks</h3>
            <div style={{marginTop: "6px"}}>
                {dateData}
            </div>
        </LocalizationProvider>
    )
}
export default TaskCalendar;
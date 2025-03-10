import GetData from "../hooks/get";
import TaskCalendar from "./calendar";
import { Container } from "@mui/material";

const DateLoader = () => {
    const { data, isPending} = GetData('https://localhost:7113/task/');
    return (
        <Container>
            {isPending && <div>Loading...</div>}
            {data && <TaskCalendar data = {data}/>}
        </Container>
    )
}
export default DateLoader;
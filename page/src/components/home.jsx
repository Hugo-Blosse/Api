import UserList from "../user/users";
import GetData from "../hooks/get";
import AddUser from "../user/add-user";
import { Container } from "@mui/material";


const Home = () => {
    const { data, isPending } = GetData('https://localhost:7113/user/');


    return (
        <Container>
            {isPending && <div>Loading...</div>}
            {data && <UserList users = {data}/>}
            <AddUser />
        </Container>
    );
  }
export default Home;
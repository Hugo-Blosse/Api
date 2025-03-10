import { useState } from "react";
import { Button, Container, FormControl, InputLabel, OutlinedInput, Stack } from "@mui/material"
import PostData from "../hooks/post";

const AddUser = () => {
    const [name, setName] = useState('');

    const handleSubmit = async() => {
        if (name.trim().length === 0) {
            return;
          }
        const u = {
            Username: name,
            Email: '',
            Password: '',
            IsAdmin: false,
            Info: ''
        }
        PostData('https://localhost:7113/user/', u)
    }

    return (
        <Container>
            <h3>Add User</h3>
            <form onSubmit={handleSubmit}>
                <Stack>
                    <FormControl required margin="normal">
                        <InputLabel htmlFor="name">Name</InputLabel>
                        <OutlinedInput label="name" size="small" value={name} onChange={e => setName(e.target.value)} />
                    </FormControl>
                    <FormControl required margin="normal">
                        <Button variant="contained" color="signup" type="submit">Add</Button>
                    </FormControl>
                </Stack>
            </form>
        </Container>
    );
}

export default AddUser;
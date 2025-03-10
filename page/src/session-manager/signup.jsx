import { useState } from "react";
import { Button, Select, MenuItem, InputLabel, FormControl, OutlinedInput, InputAdornment, IconButton, Stack, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PostData from "../hooks/post";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const SingUp = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)
    const navigate = useNavigate()

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        if (username.trim().length === 0 || password.trim().length == 0) {
            return;
          }
          console.log(isAdmin)
        const u = {
            Email: email,
            Username: username,
            Password: password,
            IsAdmin: isAdmin
        }
        PostData('https://localhost:7113/user/', u)
        localStorage.setItem("user", JSON.stringify(u))
        navigate("/login");
    }
    const handleMouseDown = (e) =>{
        e.preventDefault();
    }
    const handleClickPassword = () =>{
        setShowPassword((show) => !show)
    }


    return (
        <Container>
                <h2>Create Account</h2>
                <form onSubmit={handleSignUpSubmit}>
                    <Stack>
                    <FormControl required margin="normal">
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <OutlinedInput id="email" label="Email" value={email} size="small" onChange={e => setEmail(e.target.value)} />
                    </FormControl>
                    <FormControl required margin="normal">
                        <InputLabel htmlFor="username">Username (name + surname)</InputLabel>
                        <OutlinedInput id="username" label="Username (name + surname)" value={username} size="small" onChange={e => setUsername(e.target.value)} />
                    </FormControl>
                    <FormControl required margin="normal">
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <OutlinedInput id="password" label="Password" type={showPassword? "text":"password"} value={password} size="small" onChange={e => setPassword(e.target.value)} endAdornment={
                            <InputAdornment position="end">
                                <IconButton aria-label="toggle password visibility" onClick={handleClickPassword} onMouseDown={handleMouseDown} edge='end'>
                                    {showPassword ? <VisibilityOff />:<Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }/>
                    </FormControl>
                    <FormControl required margin="normal">
                        <InputLabel htmlFor="admin">Employee type</InputLabel>
                        <Select id="admin" label="Employee type" onChange={e => setIsAdmin(e.target.value)} size='small' autoWidth defaultValue={false}>
                            <MenuItem value={false}>Employee</MenuItem>
                            <MenuItem value={true}>Manager</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl margin="normal">
                        <Button type="submit" variant="contained" color="signup" endIcon='⬆'>Sign Up</Button>
                    </FormControl>
                    </Stack>
                </form>
        </Container>
    );
}

export default SingUp;
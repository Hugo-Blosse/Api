import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { Button} from "@mui/material";
const LogOut = () => {
    const {setAdmin, setIsLogged} = useAuth()
    const navigate = useNavigate()
    
    const handcleClick = () => {
        setAdmin(false)
        setIsLogged(false)
        localStorage.clear()
        navigate('/')
    }
    
    return (
        <Button onClick={handcleClick} variant="contained"  color='delete' endIcon='➜' sx={{"&.MuiButton-contained":{
            color: 'black'
        }}}>Log Out</Button>
    )
}
export default LogOut;
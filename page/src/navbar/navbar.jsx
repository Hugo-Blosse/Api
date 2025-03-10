import {Box, Button} from '@mui/material';
import LogOut from '../session-manager/logout';

const NavBar = () => {
    return(
        <Box sx={{display: 'flex', justifyContent: 'space-around', marginBottom: '50px'}}>
            <Button href='/' variant='contained' color='nav' endIcon='⬆'>Sign up</Button>
            <Button href='/login' variant='contained' color='nav' endIcon='⤿'>Log In</Button>
            <Button href='/home' variant='contained' color='nav' endIcon='💼'>For manager</Button>
            <Button href='/calendar' variant='contained' color='nav' endIcon='🗓️'>For employees</Button>
            <LogOut />
        </Box>
    )
}
export default NavBar;
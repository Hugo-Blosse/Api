import { Button, Container } from "@mui/material"
const NoAccess = () => {
    return (
        <Container>
            <h2>You have no access to this page</h2>
            <Button href='/' variant="contained" color="warning" endIcon='⬆'>Go back to Sign Up page </Button>
        </Container>
    )
}
export default NoAccess
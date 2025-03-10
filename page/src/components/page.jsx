import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './home';
import AddUser from '../user/add-user';
import SingUp from '../session-manager/signup';
import Login from '../session-manager/login';
import { useAuth } from '../context/auth-context';
import NoAccess from './no-access';
import DateLoader from './date-lodaer';
import NavBar from '../navbar/navbar';


const Page = () => {

  const { isLogged, admin } = useAuth()

    return (
      <Router>
        <NavBar />
          <Routes>
            <Route exact path='/' element={<SingUp />} />
            <Route path = '/login' element={<Login />} />
            <Route path='/home' element={admin? <Home />:<NoAccess />} />
            <Route path='/add-user' element={isLogged? <AddUser />:<NoAccess />} />
            <Route path='/calendar' element={isLogged? <DateLoader />:<NoAccess />} />
          </Routes>
      </Router>
    )
}
export default Page;
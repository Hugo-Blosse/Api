import { ThemeProvider } from '@emotion/react';
import './app.css'
import { AuthProvider } from './context/auth-context';
import Page from './components/page';
import {createTheme} from '@mui/material';


function App() {
  const {palette} = createTheme()
  const {augmentColor} = palette

  const createColor = (mainColor) => augmentColor({color: {main: mainColor}})
  
  const theme = createTheme({
    palette: {
      signup: createColor('#c4e4f5'),
      nav: createColor('#A7C7E7'),
      logout: createColor('#ff964f'),
      limegreen: createColor('#a4c9a1'),
      delete: createColor('#b36464'),
  },
    components:{
      MuiContainer:{
        styleOverrides:
        {
          root:
          {
            width: '60%'
          }
        }
      }
    }})


  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Page />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App

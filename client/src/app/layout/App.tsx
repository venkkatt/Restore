import { ThemeProvider } from "@emotion/react";
import { Container, createTheme, CssBaseline } from "@mui/material";
import { useState } from "react";
import Catalog from "../../features/catalog/catalog";
import Header from "./Header";


function App() {

  const [darkMode,setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme(
  {
    palette : {  mode: paletteType,
      background : { default :  paletteType ==='light' ? '#eaeaea' : '#121212'}
    }
    
  }
  )


  let handlThemeChange = () => setDarkMode(!darkMode);
 


  return (
    <ThemeProvider theme={theme}>
     <CssBaseline/>
    <Header  darkMode={darkMode} handlThemeChange={handlThemeChange} />
    <Container>
    <Catalog/>
    </Container>
    
    </ThemeProvider>
  );
}

export default App;

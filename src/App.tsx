import React, {useState,useEffect} from 'react';
import Catalog from './components/catalog/Catalog'
import {Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {Routes,Route} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/header/Header";
import HomePage from "./pages/home/HomePage";
import ProductDetails from "./components/catalog/ProductDetails";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import NotFound from "./components/errors/NotFound";
import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import BasketPage from "./pages/basket/BasketPage";

import LoadingComponent from "./components/errors/LoadingComponent";

function App() {



    const [loading, setLoading] = useState(false);


    const [darkMode,setDarkMode] = useState(false);
  const palletType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: palletType,
      background:{
        default: palletType === 'light' ? '#eaeaea': '#121212'
      }
    }
  })
  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  }
    if (loading) return <LoadingComponent message='Initialising app...' />
  return (
      <ThemeProvider theme={theme}>
          <ToastContainer position='bottom-right' hideProgressBar theme='colored' />
          <CssBaseline/>
        <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
        <br/><br/><br/>
        <Container>
          <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/catalog'} element={<Catalog/>}/>
            <Route path={'/catalog/:id'} element={<ProductDetails/>}/>
            <Route path={'/about'} element={<AboutPage/>}/>
            <Route path={'/contact'} element={<ContactPage/>}/>
              <Route path={'/basket'} element={<BasketPage/>}/>
              <Route  element={<NotFound/>} />
          </Routes>
        </Container>


      </ThemeProvider>
  )
}

export default App;

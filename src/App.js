import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import HomeScreen from './screens/homeScreen/HomeScreen'
import LoginScreen from './screens/loginScreen/LoginScreen'
import './_app.scss'
import {
   BrowserRouter,
   Routes,
   Route,
   Navigate,
   
 } from "react-router-dom";
const Layout= ({children}) => {
   const[sidebar, toggleSidebar] = useState(false);
   const handleToggleSidebar =() => toggleSidebar(value=>!value);
   return (
      <>
          <Header handleToggleSidebar={handleToggleSidebar}/>
           <div className="app__container border ">
              <Sidebar sidebar={sidebar}/>
              <Container fLuid className="app_main border">
              {children}
              </Container>
              
           </div> 
      </>
   )
}
const App = () => {


    
    return(
        <>
           
           <BrowserRouter>
           <Routes>
           <Route path="/" element={<Layout><HomeScreen/></Layout>}/>
           <Route path="/login" element={<LoginScreen/>}/>
           <Route path="/search" element={<Layout><h1>Search Screen</h1></Layout>}/>
           <Route path="*" element={<Navigate to ="/" />}/>
           </Routes>
           </BrowserRouter>
        </>
)}

export default App

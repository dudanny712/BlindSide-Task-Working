import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import HomeScreen from './screens/homeScreen/HomeScreen'
import './_app.scss'
const App = () => {
    const[sidebar, toggleSidebar] = useState(false);
    const handleToggleSidebar =() => toggleSidebar(value=>!value);
    return(
        <>
           <Header handleToggleSidebar={handleToggleSidebar}/>
           <div className="app__container border ">
              <Sidebar sidebar={sidebar}/>
              <Container fLuid className="app_main border">
              <HomeScreen />
              </Container>
           </div>
        </>
)}

export default App

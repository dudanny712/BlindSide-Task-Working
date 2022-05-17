import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import HomeScreen from './screens/homeScreen/HomeScreen'
import LoginScreen from './screens/loginScreen/LoginScreen'
import './_app.scss'
import {
   
   Routes,
   Route,
   Navigate,
   useNavigate,
   
 } from "react-router-dom";
import { useSelector } from 'react-redux'
import WatchScreen from './screens/watchScreen/WatchScreen'
import SearchScreen from './screens/SearchScreen'
import ChannelScreen from './screens/channelScreen/ChannelScreen'


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

   const {accessToken, loading}= useSelector(state => state.auth)

   const navigate = useNavigate();

  
   useEffect(() => {

      if (!loading && !accessToken){
         navigate('/login')

      }

   },[accessToken, loading, navigate])


    
    return(
        <>         
           
           <Routes>
           <Route path="/" element={<Layout><HomeScreen/></Layout>}/>
           <Route path="/login" element={<LoginScreen/>}/>
           <Route path="/search/:query" element={<Layout><SearchScreen/></Layout>}/>
           <Route path="*" element={<Navigate to ="/" />}/>
           <Route path="/watch/:id" element={<Layout><WatchScreen/></Layout>}/>
           <Route path="/channel/:channelId" element={<Layout><ChannelScreen/></Layout>}/>
           </Routes>
           
        </>
)}

export default App

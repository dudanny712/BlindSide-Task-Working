import React from 'react'
import {Col, Container, Row } from 'react-bootstrap'
import Video from '../../Components/Video/Video'
import CategoriesBar from '../../Components/Categories/CategoriesBar'

const HomeScreen = () => {


   return (
      <Container>
         <CategoriesBar />
         <Row>
         {[...new Array (20)].map(() =>(
          <Col Lg={3} md={4}>
           <Video />
          </Col>
         ))}
         </Row>
         

         
      </Container>
   )
}

export default HomeScreen

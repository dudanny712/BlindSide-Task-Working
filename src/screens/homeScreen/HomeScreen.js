import React, { useEffect } from 'react'
import {Col, Container, Row } from 'react-bootstrap'
import Video from '../../Components/Video/Video'
import CategoriesBar from '../../Components/Categories/CategoriesBar'
import { useDispatch, useSelector } from 'react-redux'
import {
   getPopularVideos,
   getVideosByCategory,
} from '../../redux/actions/videos.action'
import InfiniteScroll from 'react-infinite-scroll-component'



const HomeScreen = () => {
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getPopularVideos())
   }, [dispatch])

   const {videos, activeCategory, loading}=useSelector(state => state.homeVideos)
   
   const fetchData = () => {
      if (activeCategory === 'All') dispatch(getPopularVideos())
      else {
         dispatch(getVideosByCategory(activeCategory))
      }
   }
   return (
      <Container>
         <CategoriesBar />
         <Row>
            <InfiniteScroll
            dataLength={videos.length}
            next={fetchData}
            hasMore={true}
            loader={
               <div className='spinner-border text-danger d-block mx-auto'></div>
            }
            className='row'>
         {videos.map((video) =>(
          <Col Lg={3} md={4}>
           <Video video={video} key={video.id} />
          </Col>
         ))}
         </InfiniteScroll>
         </Row>
         

         
      </Container>
   )
}

export default HomeScreen

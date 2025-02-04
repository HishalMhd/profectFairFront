import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import View from '../components/View'
import Profile from '../components/Profile'
import Header from '../components/Header'



function Dashboard() {
  const [userName,setUserName]=useState("")
  console.log(userName);
  

  useEffect(() => {
    if(sessionStorage.getItem("user")){

      setUserName(JSON.parse(sessionStorage.getItem("user")).username)

    }
    else{
      setUserName("")
    }
  
    
  }, [])
  
  return (
    <>
    <Header/>


    <h2 className='mt-5 ms-5'>Welcome <span className='text-info fw-bold '>{userName.split(" ")[0]}</span></h2>

    <Row>
      <Col lg={8} md={6} sm={4}>
      <View/>
      
      </Col>
      <Col lg={4} md={3} sm={2}>
      <Profile/>


      </Col>
    </Row>


    


    </>
  )
}

export default Dashboard
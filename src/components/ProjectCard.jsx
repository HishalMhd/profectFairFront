import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import SERVER_URL from '../Services/serverUrl';



function ProjectCard({displayData}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>

    <Card className=' shadow bg-black' style={{ width: '18rem' }}>
      <Card.Img style={{width:"300px",height:"250px"}} onClick={handleShow} variant="top" src={`${SERVER_URL}/uploads/${displayData?.projectImg}`} className='rounded img-fluid p-3' />
      <Card.Body className='bg-white text-primary ms-3 me-3 mt-2 mb-3 p-2 rounded text-center'>
        <Card.Title className='fw-bold'>{displayData?.title}</Card.Title>
        
      </Card.Body>
    </Card>


    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>


          <div className='row'>
            <div className='col-lg-6  '>
              <img className='w-100' src={`${SERVER_URL}/uploads/${displayData?.projectImg}`} alt="" />

            </div>
            <div className='col-lg-6'>
              <h3 className='fw-bold'>{displayData?.title}</h3> <br />
              <h5>Language Used : <span className='text-warning'>{displayData?.languages}</span></h5> <br />  
              <h5><span className='fw-bold'>Project Overview:</span>{displayData?.overView}</h5>

            </div>
          </div>
          <div>
            <a href={displayData?.github} className='btn btn-warning mt-4 ps-3 pe-3'>
              <i className='fa-brands fa-github fs-4'></i>
            </a>
            <a href={displayData?.website} className='btn btn-warning mt-4 ms-3 ps-3 pe-3'>

              <i className='fa-solid fa-link fs-4'></i>


            </a>
          </div>

          
        </Modal.Body>
        
      </Modal>
    
    
    
    </>
  )
}

export default ProjectCard
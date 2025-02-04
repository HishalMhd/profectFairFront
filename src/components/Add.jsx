import React, { useContext, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import upload from '../assets/cloud-upload--removebg-preview.png'
import { toast } from 'react-toastify';
import { addProjectApi } from '../Services/allAPI';
import { addResponseContext } from '../Contexts/ContextAPI';








function Add() {

  const {addResponse,setAddResponse}=useContext(addResponseContext)

  const [projectDetails,setProjectDetails]=useState({title:"",languages:"",github:"",website:"",overView:"",projectImg:""})
  const [imgFileStatus,setImgFileStatus]=useState(false)
  const [preview,setPreview]=useState("")







  console.log(projectDetails);
 
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    setProjectDetails({title:"",languages:"",github:"",website:"",overView:"",projectImg:""})
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    
    if(projectDetails.projectImg.type=="image/png" || projectDetails.projectImg.type=="image/jpg" || projectDetails.projectImg.type=="image/jpeg"){
      setImgFileStatus(true)
      setPreview(URL.createObjectURL(projectDetails.projectImg))

    }
    else{
      setPreview(upload)
      setImgFileStatus(false)
      setProjectDetails({...projectDetails,projectImg:""})
    }
  
    
  }, [projectDetails.projectImg])
  



  const handleUpload=async()=>{
    
    const{title,languages,github,website,overView,projectImg}=projectDetails
    console.log(title,languages,github,website,overView,projectImg);

    if(title && languages && github && website && overView && projectImg){

      // api
      // req body
      // req header

      const reqBody=new FormData()
      reqBody.append("title",title)
      reqBody.append("languages",languages)
      reqBody.append("github",github)
      reqBody.append("website",website)
      reqBody.append("overView",overView)
      reqBody.append("projectImg",projectImg)

      
      const token=sessionStorage.getItem("token")
      if(token){
        const reqHeader={

          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}`
          
          
        }

        try {
 
          const result = await addProjectApi(reqBody,reqHeader)
          console.log(result);
          if (result.status=200) {
            handleClose()
            setAddResponse(result.data)
          }
          
          
        } catch (err) {
          console.log(err);
          
          
        }
      }





    }
    else{
      toast.warning("Enter Fields Completely")
    }
    
  }


  return (
    <>
    <div className=''>
      <button onClick={handleShow} className='btn btn-info   fw-bolder'>+ New Project</button>
    </div>
    
    <Modal size='lg' className=''
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark'>
         <div className='row'>

          <div className='col-lg-4'>
            <label>
              <input onChange={(e)=>setProjectDetails({...projectDetails,projectImg:e.target.files[0]})} type='file' style={{display:'none'}}/>          
          <img src={preview} className='w-100'></img>
          </label>
          {
            !imgFileStatus &&
            <div className='text-danger'>
            Only accept following file types(.png,.jpg,.jpeg)
          </div>
          }
          
          </div>

          <div className='col-lg-8 '>
        <FloatingLabel controlId="floatingTitle" label="Project title">
        <Form.Control onChange={(e)=>setProjectDetails({...projectDetails,title:e.target.value})} type="text" placeholder="project title" className='mb-3' />
        </FloatingLabel>

        <FloatingLabel controlId="floatingLang" label="Language Selected">
        <Form.Control onChange={(e)=>setProjectDetails({...projectDetails,languages:e.target.value})} type="text" placeholder="Language" className='mb-3' />
        </FloatingLabel>

        <FloatingLabel controlId="floatingGithub" label="Project github Link">
        <Form.Control onChange={(e)=>setProjectDetails({...projectDetails,github:e.target.value})} type="text" placeholder="github link" className='mb-3' />
        </FloatingLabel>

        <FloatingLabel controlId="floatingWebsite" label="Project Website Link">
        <Form.Control onChange={(e)=>setProjectDetails({...projectDetails,website:e.target.value})} type="text" placeholder="website link" className='mb-3' />
        </FloatingLabel>

          </div>
          <div>
          <FloatingLabel controlId="floatingOverview" label=" Project Overview">
        <Form.Control onChange={(e)=>setProjectDetails({...projectDetails,overView:e.target.value})} type="text" placeholder="Project overview" />
        </FloatingLabel>
          </div>

         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleUpload} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>


    </>
  )
}

export default Add
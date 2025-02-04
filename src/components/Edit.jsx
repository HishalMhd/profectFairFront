import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import SERVER_URL from '../Services/serverUrl';
import { toast } from 'react-toastify';
import { editProjectApi } from '../Services/allAPI';
import { editResponseContext } from '../Contexts/ContextAPI';



 




function Edit({project}) {

const {editResponse,setEditResponse}=useContext(editResponseContext)



    const [projectDetails,setProjectDetails]=useState({id:project?._id,title:project?.title ,languages:project?.languages ,github:project?.github,website:project?.website ,overView:project?.overView ,projectImg:""})

    const [imgFileStatus,setImgFileStatus]=useState(false)
    const [preview,setPreview]=useState("")
  
  const [show, setShow] = useState(false);

  const handleClose = () => 
  {
    setShow(false)
    setProjectDetails({id:project?._id,title:project?.title ,languages:project?.languages ,github:project?.github,website:project?.website ,overView:project?.overView ,projectImg:""})
  }

  
  const handleShow = () => {
    setShow(true)
    setProjectDetails({id:project?._id,title:project?.title ,languages:project?.languages ,github:project?.github,website:project?.website ,overView:project?.overView ,projectImg:""})


  }




   useEffect(() => {
      
      if(projectDetails.projectImg.type=="image/png" || projectDetails.projectImg.type=="image/jpg" || projectDetails.projectImg.type=="image/jpeg"){
        setImgFileStatus(true)
        setPreview(URL.createObjectURL(projectDetails.projectImg))
  
      }
      else{
        setPreview("")
        setImgFileStatus(false)
        setProjectDetails({...projectDetails,projectImg:""})
      }
    
      
    }, [projectDetails.projectImg])


    const handleUpdate=async()=>{

      const {id,title,languages,github,website,overView,projectImg}=projectDetails
      if(title && languages && github && website && overView){
        // api call

        const reqBody=new FormData()
          reqBody.append("title",title)
          reqBody.append("languages",languages)
          reqBody.append("github",github)
          reqBody.append("website",website)
          reqBody.append("overView",overView)
          preview?reqBody.append("projectImg",projectImg):reqBody.append("projectImg",project?.projectImg)

          const token=sessionStorage.getItem("token")
      if(token){
        const reqHeader={

          "Content-Type":preview?"multipart/form-data":"application/json",
          "Authorization":`Bearer ${token}`

          
          
          
        }

        try {
          const result=await editProjectApi(id,reqBody,reqHeader)
          console.log(result);
          if (result.status==200) {
            handleClose()
            setEditResponse(result.data)
            
          }
          
          
        } catch (err) {
          console.log(err);
          
          
        }
           
        
      }
      else{
        toast.warning("Please fill the the field completely")
      }

    }
  }








  return (
    <>
      <button onClick={handleShow} className="btn p-0"><i class="fa-solid fa-pen-to-square me-4"></i></button>

      <Modal size='lg' className=''
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark'>
         <div className='row'>

          <div className='col-lg-4'>
            <label>
              <input onChange={(e)=>setProjectDetails({...projectDetails,projectImg:e.target.files[0]})} type='file' style={{display:'none'}}/>          
          <img src={preview?preview:`${SERVER_URL}/uploads/${project?.projectImg}`} className='w-100'></img>
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
        <Form.Control value={projectDetails.title} onChange={(e)=>setProjectDetails({...projectDetails,title:e.target.value})} type="text" placeholder="project title" className='mb-3' />
        </FloatingLabel>

        <FloatingLabel controlId="floatingLang" label="Language Selected">
        <Form.Control value={projectDetails.languages} onChange={(e)=>setProjectDetails({...projectDetails,languages:e.target.value})} type="text" placeholder="Language" className='mb-3' />
        </FloatingLabel>

        <FloatingLabel controlId="floatingGithub" label="Project github Link">
        <Form.Control value={projectDetails.github} onChange={(e)=>setProjectDetails({...projectDetails,github:e.target.value})} type="text" placeholder="github link" className='mb-3' />
        </FloatingLabel>

        <FloatingLabel controlId="floatingWebsite" label="Project Website Link">
        <Form.Control value={projectDetails.website} onChange={(e)=>setProjectDetails({...projectDetails,website:e.target.value})} type="text" placeholder="website link" className='mb-3' />
        </FloatingLabel>

          </div>
          <div>
          <FloatingLabel controlId="floatingOverview" label=" Project Overview">
        <Form.Control value={projectDetails.overView} onChange={(e)=>setProjectDetails({...projectDetails,overView:e.target.value})} type="text" placeholder="Project overview" />
        </FloatingLabel>
          </div>

         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleUpdate}  variant="primary">Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Edit
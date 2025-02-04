import React, { useEffect } from 'react'
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import UploadImgSecond from '../assets/freeeupload.png'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import SERVER_URL from '../Services/serverUrl';
import { editProfileApi } from '../Services/allAPI';



function Profile() {
  const [userDetails,setUserDetails]=useState({username:"",email:"",password:"",github:"",linkedIn:"",profile:""})
  const [existingImg,setExistingImg]=useState("")
  const [preview,setPreview]=useState("")
  console.log(preview);
  

  const [open, setOpen] = useState(false);



  useEffect(() => {
    if(sessionStorage.getItem("user")){
      const existingUser=JSON.parse(sessionStorage.getItem("user"))
      setUserDetails({...userDetails,username:existingUser?.username,email:existingUser?.email,password:existingUser?.password,github:existingUser?.github,linkedIn:existingUser?.linkedIn})
      setExistingImg(existingUser?.profile)
    }
    
  
    
  }, [open])

  useEffect(() => {
    if(userDetails.profile){
      setPreview(URL.createObjectURL(userDetails.profile))

    }
    else{
      setPreview("")
    }

  }, [userDetails.profile])
  



  const handleUpdate=async()=>{
    const {username,email,password,github,linkedIn,profile}=userDetails
    if(github && linkedIn){
      // api call

      const reqBody=new FormData()
      reqBody.append("username",username)
      reqBody.append("email",email)
      reqBody.append("password",password)
      reqBody.append("github",github)
      reqBody.append("linkedIn",linkedIn)
      preview? reqBody.append("profile",profile):reqBody.append("profile",existingImg)

      const token= sessionStorage.getItem("token")
      console.log(token);
      


      if(token){
        const reqHeader={

          "Content-Type":preview?"multipart/form-data":"application/json",
          "authorization":`Bearer ${token}`

        }

        try {
          
          const result=await editProfileApi(reqBody,reqHeader)
          console.log(result);
          if(result.status==200){
            setOpen(!open)
            sessionStorage.setItem("user",JSON.stringify(result.data))
          }
          
        } catch (err) {
          console.log(err);
          
          
        }
      }
    }
  }
  



  return (
    <>

      <div className='d-flex justify-content-around'>
        <h3>Profile</h3>
        <button onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open} className='btn'><i className="fa-solid fa-chevron-down"></i></button>



      </div>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <div className=' '>

          <label className='me-4 d-flex justify-content-center mt-5'>
            <input  style={{display:'none'}} type="file" onChange={(e)=>setUserDetails({...userDetails,profile:e.target.files[0]})} />
            {
            existingImg==""?
             <img className='w-25' src={preview?preview:UploadImgSecond} alt="" />
             :
             <img className='w-25 rounded-circle' src={preview?preview: `${SERVER_URL}/uploads/${existingImg}`} alt="" />

           }
          </label>

          </div>
          <div className='me-4 mt-5 d-flex flex-column justify-content-center  align-items-center'>
            <div>
            <FloatingLabel controlId="floatingInput" label="Github Link" className="mb-3  " >
              <Form.Control value={userDetails?.github} onChange={(e)=>setUserDetails({...userDetails,github:e.target.value})} type="text" placeholder="Github Link" />
            </FloatingLabel>
            </div>
            <div>
            <FloatingLabel controlId="floatingInput" label="Linkedin Link"  className="mb-3 " >
              <Form.Control value={userDetails?.linkedIn} onChange={(e)=>setUserDetails({...userDetails,linkedIn:e.target.value})} type="text" placeholder="Linkedin Link" />
            </FloatingLabel>
            </div>
            <div>
            <button onClick={handleUpdate} className='btn btn-primary fw-bold fs-5 w-100 ps-4 pe-4'>Update</button>
            </div>
          </div>

        </div>
      </Collapse>

    </>
  )
}

export default Profile
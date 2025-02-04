import React, { useContext, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginApi, registerApi } from '../Services/allAPI';
import Spinner from 'react-bootstrap/Spinner';  
import { authorizationContext } from '../Contexts/ContextAPI';



 


function Auth({insideRegister}) {

  const {isAuthorized,setIsAuthorized}=useContext(authorizationContext)

  const [userDetails,setUserDetails]=useState({username:"",email:"",password:""})

  const [isLogin,setIsLogin]=useState(false)





  console.log(userDetails);

  const navigate=useNavigate()

  const handleRegister=async()=>{
    

    if(userDetails.username && userDetails.email && userDetails.password){


      try{

        const result=await registerApi(userDetails)
        console.log(result);
        if(result.status==200){
          setIsAuthorized(true)
          setUserDetails({username:"",email:"",password:""})
          navigate('/login')
          
        }
        else{
          if(result.status==406){
            toast.info(result.response.data)
            setUserDetails({username:"",email:"",password:""})
          }
        }
        


      }
      catch(err){

        console.log(err);
        

      }

    }
    else{
      toast.info('enter the field completely')
    }


  }




  const handleSignin=async()=>{
    if(userDetails.email && userDetails.password){     
      //api call for login
      try{

        const result = await loginApi(userDetails)
        // console.log(result);
        if(result.status==200){
          sessionStorage.setItem("user",JSON.stringify(result.data.user))
          sessionStorage.setItem("token",result.data.token)
          setIsLogin(true)
          
         
          setTimeout(() => {
           
            setUserDetails({username:"",email:"",password:""})

            navigate('/')
            setIsLogin(false)
            
            
            
            
          }, 2000);

          
        }

        else{
          if(result.status==404){
            toast.error(result.response.data)
          }
        }
        

      }
      catch(err){
        console.log(err);
        
      }
    }else{
      toast.warning("Enter the Field Completely")
    }
}




  
  return (
    <>

      <div className='container bg-dark rounded'style={{marginTop:"125px"}}>

        <div className='row'>
          <div className='col-lg-6 rounded'>
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/app-login-security-illustration-download-in-svg-png-gif-file-formats--online-e-banking-internet-bank-credit-card-payment-cyber-pack-device-illustrations-4077880.png" alt="" />

          </div>

          <div className='col-lg-6 ps-5 pe-5 bg-white rounded'>

            <h2 className='fw-bold ms-3 text-dark'><i class="fa-brands fa-firstdraft mt-5 fw-bold text-dark"> </i> Project Fair</h2>
            <h6 className='ms-3 mt-4 fw-bold text-dark'>Sign {insideRegister?'Up':'In'} to your Account</h6>

            { insideRegister &&

              <FloatingLabel controlId="floatingInput" label="User Name" className="mb-3 w-100">
              <Form.Control onChange={e=>setUserDetails({...userDetails,username:e.target.value})} value={userDetails.username} type="text" placeholder="User Name" />
            </FloatingLabel>}
            
            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3 w-100">
              <Form.Control onChange={e=>setUserDetails({...userDetails,email:e.target.value})} value={userDetails.email} type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password" className='w-100'>
              <Form.Control onChange={e=>setUserDetails({...userDetails,password:e.target.value})} value={userDetails.password} type="password" placeholder="Password" /> 
            </FloatingLabel>

            {insideRegister ?
            
            <div>
              <button type='submit' onClick={handleRegister} className='btn w-100 mt-4 fw-bold fs-4 btn-primary text-white '>Sign Up</button>
              <p className='mt-2 text-dark'>Already have an Account <Link to={'/login'}>Login</Link></p>
            </div>

            :
            <div>
              <button onClick={handleSignin} className='btn w-100 mt-4 fw-bold fs-4 btn-primary text-white '>Sign In <br />
                { isLogin &&
                  <Spinner  variant="light" />
                }
              </button>
            <p className='mt-2 text-dark'>Dont have an account yet? <Link to={'/register'}>Register</Link></p>
            </div>
          
          
             }


          </div>

        </div>



      </div>

    </>
  )
}

export default Auth
import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { authorizationContext } from '../Contexts/ContextAPI';








function Header() {


    const {isAuthorized,setIsAuthorized}=useContext(authorizationContext)
  


  const navigate=useNavigate()



  const handleLogOut=()=>{
    sessionStorage.clear()
    navigate('/login')
    setIsAuthorized(false)

  }
  return (
    <>
    
    <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand href="#home">
            {' '}
            
            <Link className='text-decoration-none' to={'/'}><i class="fa-brands fa-firstdraft fs-3 me-2 text-white"></i><span className='fw-bold text-white fs-3'>Project Fair</span></Link>

            
            

            
          </Navbar.Brand>
          <div>
              <button onClick={handleLogOut} className='btn bg-white text-primary fw-bold ps-4 pe-4'>Log Out</button>
              </div>     
        </Container>
      </Navbar>

    </>
  )
}

export default Header
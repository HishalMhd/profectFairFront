import React, { useEffect, useState } from 'react'
import { Col, Row, Toast } from 'react-bootstrap'
import homeimg from '../assets/NORTH.png'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProjectCard from '../components/ProjectCard'
import { homeProjectApi } from '../Services/allAPI';
import { toast } from 'react-toastify';









function Home() {

    const [homeProject,setHomeProject]=useState([])
    console.log(homeProject);
    const navigate=useNavigate()
    


    useEffect(() => {

        getHomeProject()
      
    
      
    }, [])
    


    const getHomeProject=async()=>{

        try {

            const result=await homeProjectApi()
            console.log(result);
            if(result.status==200){
                setHomeProject(result.data)

            }
            


            
        } catch (err) {
            console.log(err);
            
            
        }
    }




    const handleProject=(e)=>{
        e.preventDefault()
        if(sessionStorage.getItem("token")){
            navigate('/projects')

        }
        else{
            toast.warning('Please Login')
        }
    }






    return (
        <>

            <div className='container d-flex justify-content-center' style={{ marginTop: '150px' }}>
                <Row>
                    <Col lg={6} md={12} sm={12} className='pe-5'>
                        <h1 className='fw-bold'><i class="fa-brands fa-firstdraft mt-5 fw-bold"> </i> Project Fair</h1>
                        <h6 className='mt-5'>One top destination for all software development projects. Where user can add <br /> and manage their projects.As well as access all projects available in our website. <br />What are you waiting for <span className='fs-4'>!!!</span></h6>
                        {
                            sessionStorage.getItem("token")?
                            <Link to={'/dashboard'}><button className='btn btn-primary mt-3 ps-3 pe-3 pt-2 pb-2'>Manage your Projects</button></Link>
                            :
                            <Link to={'/login'}><button className='btn btn-primary mt-3 ps-3 pe-3 pt-2 pb-2'>Start To Explore</button></Link>
                        }



                    </Col>
                    <Col lg={6} md={12} sm={12} className='ps-5' >
                        <img className='w-100' src={homeimg} alt="" />

                    </Col>
                </Row>
            </div>


            <div className='mt-5 text-center'>
                <h1>Explore Our Projects</h1>
                <marquee>

                    <div className='d-flex my-5'>
                        {
                            homeProject?.length>0 &&
                            homeProject?.map(project=>(
                                <div className='me-5 '>

                            <ProjectCard displayData={project} />


                        </div>
                            ))
                        }
                    </div>
                </marquee>

                <Link onClick={handleProject} className='text-info btn-link'>Click here to view my projects</Link>



            </div>

            <div>
                <h1 className='text-center mt-5 mb-5'>Our Testimonial</h1>
                <div className=' container d-flex justify-content-center'>
                    <div className='row'>
                    <div className='col-lg-4'>
                        <Card className='p-3' style={{ width: '18rem' }}>
                           
                           <Card.Body>
                               <Card.Title>
                                   <div className='text-center'>
                                   <img className='w-50 rounded-circle' src="https://img.freepik.com/premium-vector/young-guy-brunette-semi-flat-vector-character-head-man-looks-away-editable-cartoon-avatar-icon-face-emotion-colorful-spot-illustration-web-graphic-design-animation_151150-16182.jpg?w=360" alt="" />
                                   
                                   <h5 className='mt-3 fw-bold fs-4'>Max Miller</h5>
                                   </div>
                               </Card.Title>
                               <Card.Text>
                               <div className='text-center'>
                               <i class="fa-solid fa-star text-info"></i>
                               <i class="fa-solid fa-star text-info"></i>
                               <i class="fa-solid fa-star text-info"></i>
                               <i class="fa-solid fa-star text-info"></i>
                               
                               </div>

                               <p className='text-center mt-3'>
                                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi voluptate atque aliquam facilis quibusdam esse fuga id architecto inventore quos placeat ipsum cumque praesentium dolores, tenetur amet, delectus consequatur modi.
                               </p>
                               </Card.Text>
                               
                           </Card.Body>
                       </Card>
                        </div>
                        <div className='col-lg-4'>
                        <Card className='p-3' style={{ width: '18rem' }}>
                           
                           <Card.Body>
                               <Card.Title>
                                   <div className='text-center'>
                                   <img className='w-50 rounded-circle' src="https://media.istockphoto.com/id/1176363686/vector/smiling-young-asian-girl-profile-avatar-vector-icon.jpg?s=612x612&w=0&k=20&c=QuyZJNKexFQgDPr9u91hKieWKOYbaFxPb0b0gwmd-Lo=" alt="" />
                                   
                                   <h5 className='mt-3 fw-bold fs-4'>Nitara</h5>
                                   </div>
                               </Card.Title>
                               <Card.Text>
                               <div className='text-center'>
                               <i class="fa-solid fa-star text-info"></i>
                               <i class="fa-solid fa-star text-info"></i>
                               <i class="fa-solid fa-star text-info"></i>
                               <i class="fa-solid fa-star text-info"></i>
                               
                               </div>

                               <p className='text-center mt-3'>
                                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi voluptate atque aliquam facilis quibusdam esse fuga id architecto inventore quos placeat ipsum cumque praesentium dolores, tenetur amet, delectus consequatur modi.
                               </p>
                               </Card.Text>
                               
                           </Card.Body>
                       </Card>
                        </div>
                        <div className='col-lg-4' >
                        <Card className='p-3' style={{ width: '18rem' }}>
                           
                           <Card.Body>
                               <Card.Title>
                                   <div className='text-center'>
                                   <img className='w-50 rounded-circle' src="https://img.freepik.com/premium-vector/bearded-black-man-winking-smiling-2d-vector-avatar-illustration-african-american-adult-sparkling-cartoon-character-face-portrait-friendly-flirty-guy-flat-color-user-profile-image-isolated-white_151150-19800.jpg?semt=ais_hybrid" alt="" />
                                   
                                   <h5 className='mt-3 fw-bold fs-4'>Ashish Jhone</h5>
                                   </div>
                               </Card.Title>
                               <Card.Text>
                               <div className='text-center'>
                               <i class="fa-solid fa-star text-info"></i>
                               <i class="fa-solid fa-star text-info"></i>
                               <i class="fa-solid fa-star text-info"></i>
                               <i class="fa-solid fa-star text-info"></i>
                               
                               </div>

                               <p className='text-center mt-3'>
                                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi voluptate atque aliquam facilis quibusdam esse fuga id architecto inventore quos placeat ipsum cumque praesentium dolores, tenetur amet, delectus consequatur modi.
                               </p>
                               </Card.Text>
                               
                           </Card.Body>
                       </Card>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    <div></div>
                </div>



            </div>





        </>
    )
}

export default Home
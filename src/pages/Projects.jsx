import React, { useEffect, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { allProjectApi } from '../Services/allAPI';



function Projects() {

  const [allProjects,setAllProjects]=useState([])
  console.log(allProjects);
  const [searchKey,setSearchKey]=useState("")
  console.log(searchKey);
  




  useEffect(() => {
    
    getAllProjects()
  }, [searchKey])
   




  const getAllProjects=async()=>{
    const token=sessionStorage.getItem("token")
  if(token){
    const reqHeader={
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`

    }

    try {

      const result=await allProjectApi(searchKey,reqHeader)
      // console.log(result);
      if(result.status==200){
        setAllProjects(result.data)
      }
      
      
      
      
    } catch (err) {
      console.log(err);
      
      
    }
  }
  }


   
  

  
  





  return (
    <div className='container mt-5'>

      <div className='d-flex  justify-content-between'>
        <h3 className='fw-bold mt-4'>All Projects</h3>
        <input onChange={(e)=>setSearchKey(e.target.value)} type="text" className='mt-4 form-control w-50' placeholder='search the project by language'/>
    

      </div>
      <div className='row mt-5 '>

          {
            allProjects?.length>0 &&
            allProjects?.map(project=>(
              <div style={{marginLeft:"80px"}} className='col-lg-3 me-2 d-flex mb-4'>

              <ProjectCard displayData={project}/>
              </div>

              
            ))
          }


      </div>



    </div>
  )
}

export default Projects
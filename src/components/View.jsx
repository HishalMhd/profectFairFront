import React, { useContext, useEffect, useState } from 'react'
import Add from '../components/Add'
import Edit from '../components/Edit'
import { deleteProjectApi, userProjectApi } from '../Services/allAPI'
import { addResponseContext, editResponseContext } from '../Contexts/ContextAPI'





function View() {


  const {addResponse,setAddResponse}=useContext(addResponseContext)
  const {editResponse,setEditResponse}=useContext(editResponseContext)

  const [userProjects, setAllUserProjects] = useState([])
  console.log(userProjects);




  useEffect(() => {

    getUserProjects()


  }, [addResponse,editResponse])





  const getUserProjects = async () => {

    const token = sessionStorage.getItem('token')
    if (token) {
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      try {

        const result = await userProjectApi(reqHeader)
        if (result.status == 200) {
          setAllUserProjects(result.data)
          

        }

      } catch (err) {
        console.log(err);


      }
    }


  }



  const handleDeleteProject=async(pid)=>{
    const token=sessionStorage.getItem("token")
      if(token){
        const reqHeader={

          "Content-Type":"application/json",
          "Authorization":`Bearer ${token}`
          
          
        }
        try {

          const result=await deleteProjectApi(pid,reqHeader)
          console.log(result);
          if (result.status==200) {

            getUserProjects()
            
          }
          
          
        } catch (err) {
          console.log(err);
          
          
        }
      }


    



  }




  return (


    <>

      <div className='border border-5 rounded ms-5 p-3'>
        <div className='d-flex justify-content-between ms-4 me-4'>
          <h3 className='fw-bold'>All Projects</h3>
          <Add />
        </div>

        {
          userProjects?.length &&


            userProjects?.map(projects => (
              <div className='border d-flex justify-content-between p-4 rounded mt-5'>
                <h5>{projects.title}</h5>
                <div>
                  <Edit project={projects}/>
                  <a className='text-white' href=""><i class="fa-brands fa-github me-4"></i></a>
                  <button onClick={()=>handleDeleteProject(projects?._id)} className='btn p-0'><i class="fa-solid fa-trash text-primary me-4 "></i></button>


                </div>

              </div>
              

            )
            
          )
      }

      </div>

    </>
  )
}

export default View
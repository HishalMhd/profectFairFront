import commonAPI from "./commonAPI";
import SERVER_URL from "./serverUrl";





// 1. API CALL TO REGISTER A USER

export const registerApi=async(reqBody)=>{

    return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)

}


// 2. API CALL TO LOGIN A USER'


export const loginApi=async(reqBody)=>{

    return await commonAPI("POST",`${SERVER_URL}/login`,reqBody)

}


// 3. API call to add projects


export const addProjectApi=async(reqBody,reqHeader)=>{

    return await commonAPI("POST",`${SERVER_URL}/add-project`,reqBody,reqHeader)

}


// 4. API call to get home projects

export const homeProjectApi=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/get-home-projects`,"")

}

// 5.API call to get user projects

export const userProjectApi=async(reqHeader)=>{

    return await commonAPI("GET",`${SERVER_URL}/get-user-projects`,"",reqHeader)

}

// 6.API call to get all projects

export const allProjectApi=async(searchKey,reqHeader)=>{

    return await commonAPI("GET",`${SERVER_URL}/get-all-projects?search=${searchKey}`,"",reqHeader)

}


// 7. API call to edit user projects

export const editProjectApi=async(pid,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/edit-user-projects/${pid}`,reqBody,reqHeader,)
}



// 8. API call to delete user projects


export const deleteProjectApi=async(pid,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/delete-user-projects/${pid}`,{},reqHeader)

}



// 9. API call to update user profile

export const editProfileApi=async(reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/edit-profile`,reqBody,reqHeader)
}

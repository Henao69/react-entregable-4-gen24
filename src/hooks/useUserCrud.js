import axios from "axios"
import { useState } from "react"

const useUserCrud  = () => {

    const [users, setUsers] = useState()

    // const url = `https://users-crud.academlo.tech/users/`
    const url = `https://users-form-test.onrender.com/api/v1/users/`

    //Get
    const getAllUsers = () => {
        axios.get(url)
          .then(res => setUsers(res.data))
          .catch(err => console.log(err))
    }

    //Post
    const createNewUser = (data) => {
        axios.post(url, data)
          .then(res => getAllUsers())
          .catch(err => console.log(err))
    }

    //Delete 
    const deleteUserByID = (id) => {
        const urlDelete = `${url}${id}/`
        axios.delete(urlDelete)
          .then(res => getAllUsers())
          .catch(err => console.log(err))
    }
    
    //Update
    const updateUserByID = (id, data) => {
        const urlUpdate = `${url}${id}/`
        axios.put(urlUpdate, data)
          .then(res => getAllUsers())
          .catch(err => console.log(err))
    }


    return {
        users,
        getAllUsers,
        createNewUser,
        deleteUserByID,
        updateUserByID
    }
}

export default useUserCrud
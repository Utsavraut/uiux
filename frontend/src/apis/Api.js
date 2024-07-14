import axios from "axios";

const Api = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
    
    headers:{
        "Content-Type": "multipart/form-data",
    }
})

// make seperate header for authorization
const token = localStorage.getItem('token')

const config = {
    headers:{
        'authorization' : `Bearer ${token}`
    }
}

export const createUserApi = (data)=> Api.post('api/users/create',data)
export const loginUserApi = (data)=> Api.post('api/users/login',data)

export const createDestinationApi = (data)=> Api.post('api/admin/createDestination',data)
export const getDestinationApi = (data) => Api.get('/api/admin/getDestination',data)

export const getDestinationByIdApi = (id) => Api.get(`api/admin/destination/getById/${id}`)

export const getYouMayLikeDataApi = (id) => Api.get(`api/admin/destination/youMayLike/${id}`)

// export const updateUserApi = (id, data) => Api.put(`/api/user/update_user/${id}`, data);
// export const getSingleUserApi = (id) => Api.get(`/api/user/get_user/${id}`)
// export const forgetPasswordAPI = (data)=> Api.post('/api/user/forgetpassword', data)`
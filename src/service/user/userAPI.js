import api from "../axios";


const headers =  {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
}


const userAPI = {
    login: (data) => api.post('/admin/login', data),
    
}

export default userAPI;
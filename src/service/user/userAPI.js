import api from "../axios";


const headers =  {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
}


const userAPI = {
    login: (data) => api.post('/admin/login', data),
    getMe: () => api.get('/admin/get-my-data', {headers}),
    update: (data) => api.get('/admin/update', data, {headers}),
}

export default userAPI;
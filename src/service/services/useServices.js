

import api from "../axios";


const headers =  {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
}


const useServices = {
    getServices: () => api.get('/service', {headers}),
    userRegistration: (data) => api.post(`/user/register`, data, {headers}),
    createService: (data) => api.post('/service', data, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    }),
}

export default useServices;
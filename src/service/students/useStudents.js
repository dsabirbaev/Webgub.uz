


import api from "../axios";


const headers =  {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
}


const useStudents = {
    getStudents: () => api.get('/student', {headers}),
    updateStatus: (id, data) => api.put(`/student/update-status/${id}`, data, {headers}),
    userRegistration: (data) => api.post(`/student/register`, data, {headers}),
    getPaging: (page) => api.get(`/student/page=${page}`, {headers}),
}

export default useStudents;
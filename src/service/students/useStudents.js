


import api from "../axios";


const headers =  {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
}


const useStudents = {
    getStudents: () => api.get('/student', {headers}),
}

export default useStudents;
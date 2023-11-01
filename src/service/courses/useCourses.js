




import api from "../axios";


const headers =  {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
}


const useCourses = {
    getCourses: () => api.get('/course', {headers}),
    createCourse: (data) => api.post('/course', data, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    }),
}

export default useCourses;
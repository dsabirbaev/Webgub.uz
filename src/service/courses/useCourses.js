




import api from "../axios";


const headers =  {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
}


const useCourses = {
    getCourses: () => api.get('/course', {headers}),
}

export default useCourses;
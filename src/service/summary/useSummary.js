


import api from "../axios";


const headers =  {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
}


const useSummary = {
    getSummary: () => api.get('/summary', {headers}),
}

export default useSummary;
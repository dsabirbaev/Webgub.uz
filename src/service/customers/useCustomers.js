

import api from "../axios";


const headers =  {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
}


const useCustomers = {
    getCustomers: () => api.get('/customer', {headers}),
}

export default useCustomers;
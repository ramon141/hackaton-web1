import axios from "axios";

const api = axios.create({
    baseURL: 'https://acb4-179-84-218-84.ngrok-free.app/api'
})

// api.interceptors.request.use(async config => {
//     config.headers.Authorization = `Bearer ${TOKEN}`;

//     return config;
// })

// api.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//         const url = error?.request?.responseURL || "";
//         const status = error?.response?.status;

//         if (status === 401 && !url.endsWith('/api/login'))
//             tokenExpired();

//         if (error.code === "ERR_NETWORK")
//             error.response = { data: { message: `A API não está respondendo. Certifique-se que ela está aberta no endereço: ${error.config.baseURL}` } };

//         return Promise.reject(error);
//     }
// );

export default api;
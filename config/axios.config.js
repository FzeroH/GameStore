import axios from "axios";

const instance = axios.create({
    baseURL: "http://alex-parkhomov.ru:8082",
    headers: {
        'Content-type' : 'application/json',
        "Access-Control-Allow-Origin": "*"
    }
});

export default instance;
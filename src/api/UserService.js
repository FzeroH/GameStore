import instance from "../../config/axios.config";

class UserService {

    static login = () => new Promise((resolve, reject) => {
       instance.post("/api/v1/auth")
           .then(res => resolve(res.data))
           .catch(error => reject(error));
    });
}

export default UserService;
import instance from "../../config/axios.config";

class AuthorizationService{

    static authUser = (data) => new Promise((resolve, reject) => {
        instance.get('/')
            .then((res) => resolve(res))
            .catch((error) => reject(error));
    })
}

export default AuthorizationService;
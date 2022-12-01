import axios from "axios";

class AgeAxios {
    constructor() {
        this.axios = axios.create({
            baseURL: 'https://api.agify.io'
        })
    }

    getAgebyName(name) {
        return this.axios
            .get(`/?name=${name}`)
            .then(({ data }) => data)
            .catch(err => console.log(err))
    }

}

export default AgeAxios
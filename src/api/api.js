import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://swapi.dev/api/people',
})

export const heroesAPI = {
    getHeroes() {
        return instance.get()
            .then(response => response.data);
    }
}
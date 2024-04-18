import axios from 'axios';

export default {
    async getAnimals() {
        const response = await axios.get('https://freetestapi.com/api/v1/animals?limit=10');
        return response.data;
    },
};

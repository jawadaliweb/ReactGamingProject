// 23d17d6e72984c1ea097cd3392458224 api secret key fetch data from it

import axios from 'axios';

const apiClient = axios.create({  
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '23d17d6e72984c1ea097cd3392458224'
    }
})


export default apiClient

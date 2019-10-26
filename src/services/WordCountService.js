// Word Count Service

import axios from 'axios';
const url = 'http://localhost:8081/services/radwords/api/no-auth/count/';
const WordCountService = {
    getCount(word){
        return axios
            .get(url + word)
    },
};

export default WordCountService
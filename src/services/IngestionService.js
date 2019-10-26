// Ingestion Service

import axios from 'axios';
const url = 'http://localhost:8081/services/radwords/api/no-auth/text';
const IngestionService = {
    submitText(text){
        const body = { '':text } // preserve spaces
        return axios
            .post(url, body)
    },
};

export default IngestionService
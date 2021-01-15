import axios from 'configs/axios'

export default {
    upload: (base64) => axios.get(`/media`, {image: base64}),

    
};
import axios from 'axios';
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'bce4924186msh4e16980fae1b15bp1dd898jsne490debd1533',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromApi = async(url) => {
   const {data} = await axios.get(`${BASE_URL}/${url}`, options);

   return data;
}
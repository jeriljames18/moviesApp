
import axios from 'axios';
import qs from 'qs';
import { API_KEY,BASE_URL } from '../config/config';


let url = BASE_URL;

export const getMovies = async (type) => {
    const movieURL = url + 'movie/' + type;
    try {
      const params = {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
      };
      
      const moviesNowPlaying = axios.create({
        paramsSerializer: (params) =>
          qs.stringify(params, { arrayFormat: 'repeat' }),
      });


      const response = await moviesNowPlaying.get(movieURL, { params });
      const result = response.data.results;
      return result;

    } catch (error) {
      console.log('error..............' + error);
      throw error;
    }
  };
  
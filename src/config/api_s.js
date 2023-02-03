
import axios from 'axios';
import qs from 'qs';
import { API_KEY, BASE_URL, SEARCH_URL } from '../config/config';


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


export const getTvShows = async (type) => {
  const tvShowUrl = url + 'tv/' + type;
  try {
    const params = {
      api_key: API_KEY,
      language: 'en-US',
      page: 1,
    };

    const tvShows = axios.create({
      paramsSerializer: (params) =>
        qs.stringify(params, { arrayFormat: 'repeat' }),
    });

    const response = await tvShows.get(tvShowUrl, { params });
    const result = response.data.results;
    return result;


  } catch (err) {
    console.log('error ' + err);
    throw err;
  }
}

export const getShowDetails  = async (id,listType) => {


  listType = listType || 'movie';
  const showDetailURL = `${url}${listType}/${id}`;
  console.log(showDetailURL);
  try {
    const params = {
      api_key: API_KEY,
      language: 'en-US',
    };

    const showDetails = axios.create({
      paramsSerializer: (params) =>
        qs.stringify(params, { arrayFormat: 'repeat' }),
    });

    const response = await showDetails.get(showDetailURL, { params });

    const result = response.data;


    return result;
  } catch (err) {
    console.log('error' + err);
    throw error;
  }
}


export const getSearchResults = async (searchQuery, type) => {
  const searchURL = url + SEARCH_URL + type;
  console.log('searchQuery>' + searchQuery);
  console.log('type' + type);
  console.log('searchURL' + searchURL);
  try {
    const params = {
      api_key: API_KEY,
      language: 'en-US',
      page: 1,
      query: searchQuery,
      include_adult: false,
    };

    const searchResults = axios.create({
      paramsSerializer: (params) =>
        qs.stringify(params, { arrayFormat: 'repeat' }),
    });

    const response = await searchResults.get(searchURL, { params });
    const result = response.data.results;

    //console.log('result', result);

    return result;
  } catch (error) {
    console.log('error' + error);
    throw error;
  }
};

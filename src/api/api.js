import axios from "axios";

const URL = "https://api.themoviedb.org/3";
const API_KEY = "d6622a0c8acb0300c9dde99d9a976be7";

const endpoints = {
  originals: "/discover/tv",
  trending: "/trending/all/week",
  now_playing: "/movie/now_playing",
  popular: "/movie/popular",
  top_rated: "/movie/top_rated",
  upcoming: "/movie/upcoming",
};

export const fetchData = (param) => {
  return axios.get(`${URL}${endpoints[param]}?api_key=${API_KEY}`);
};

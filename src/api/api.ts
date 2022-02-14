import axios from 'axios';

export const APIgetInitialNews = (id: number) =>
  axios.get(`https://api.hnpwa.com/v0/news/${id}.json`);
export const APIgetAllComments = (id: number) =>
  axios.get(`https://api.hnpwa.com/v0/item/${id}.json`);

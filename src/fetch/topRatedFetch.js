import axios from 'axios'

const topRatedFetch = () => {
  const url = 'https://api.themoviedb.org/3/movie/top_rated?language=tr-TR&page=1';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzNlOGRiM2Q1ZjdiNzIwYmVjMTVkYjM5ZmVlMzU4YSIsInN1YiI6IjY0MmFhYzk5YTNlNGJhMzI0OGQ4MmFkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M8UAuqJPSrP7IvG9NTrKJjWpXHIT4WUwZ9oVB_3SYHY'
    }
  };

  return axios.get(url, options)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

export default topRatedFetch;

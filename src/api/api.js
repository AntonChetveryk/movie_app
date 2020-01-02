export const API_URL = "https://api.themoviedb.org/3";

export const API_KEY_3 = "b3ff350532467eb0b07cf18d16f4a254";

export const API_KEY_4 =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2ZmMzUwNTMyNDY3ZWIwYjA3Y2YxOGQxNmY0YTI1NCIsInN1YiI6IjVkZWJlZWIzZGFmNTdjMDAxNWVhOWVhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.442u7uWzvay-kNfCoZWJ7h-5KWhh9qWCJHHqA3jjOBw";

export const fetchApi = (url, options = {}) => {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(response => {
        if (response.status < 400) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then(data => {
        resolve(data);
      })
      .catch(response => {
        response.json().then(error => {
          reject(error);
        });
      });
  });
};

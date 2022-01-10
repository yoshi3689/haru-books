import axios from 'axios';

// the below is necessary for heroku deployment
const port = process.env.PORT || 3001;

export const savedBooks =  axios.create({
    baseURL: `http://localhost:${port}/bookshelf`
});

export const users =  axios.create({
    baseURL: `http://localhost:${port}/users`
});



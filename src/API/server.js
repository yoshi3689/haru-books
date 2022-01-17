import axios from 'axios';

// the below is necessary for heroku deployment
// const port = process.env.PORT || 3002;

export const savedBooks =  axios.create({
    baseURL: `/api/bookshelf`
});

export const users =  axios.create({
    baseURL: `/api/users`
});

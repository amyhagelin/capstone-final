export const BACKEND_URL = process.env.NODE_ENV === 'production' 
    ? 'https://vast-harbor-72107.herokuapp.com'
    : 'http://localhost:8080'  
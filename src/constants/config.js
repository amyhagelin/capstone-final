export const BACKEND_URL = process.env.NODE_ENV === 'production' 
    ? 'https://dashboard.heroku.com/apps/vast-harbor-72107'
    : 'http://localhost:8080'  
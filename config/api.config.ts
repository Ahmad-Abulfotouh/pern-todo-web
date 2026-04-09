export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1',
  TIMEOUT: 5000,
  ENDPOINTS: {
    LOGIN: '/auth/login',
    SIGNUP: '/auth/register',
    TODOS: '/todos',
    USERS: '/users'
  }
};
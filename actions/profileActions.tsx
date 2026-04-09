import { API_CONFIG } from '../config/api.config';
import Cookies from 'js-cookie';

export const logoutHandler = async () => {
    Cookies.remove('token');
}

export const getEmail = async (token: string) => {

  const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.USERS}`, {
    method: 'GET',
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': `Bearer ${token}`,
    }
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Getting email failed.');
  }

  return await response.json();
}

export const changePasswordHandler = async (newPassword: string) => {

  const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.USERS}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ "newPassword": newPassword }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Changing password failed.');
  }

  return await response.json();
}
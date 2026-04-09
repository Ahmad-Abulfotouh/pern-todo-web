import { API_CONFIG } from '../config/api.config';

export const getTodos = async (credentials: any) => {

    const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.TODOS}`, {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${credentials}`,
    },
    });

    if (response.status === 401) {
        throw new Error('UNAUTHORIZED'); 
    }

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Getting todos failed.');
    }

    return await response.json();
}

export const addTodo = async (content: string, token: string) => {

    const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.TODOS}`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json', 
				'Authorization': `Bearer ${token}`,
    	},
      body: JSON.stringify({content: content}),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Adding failed.');
    }

    return await response.json();
}

export const editTodo = async (content: string, id: number, token: string) => {

    const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.TODOS}/${id}`, {
      method: 'PATCH',
      headers: { 
        'Content-Type': 'application/json', 
				'Authorization': `Bearer ${token}`,
    	},
      body: JSON.stringify({"content": content}),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Editing failed.');
    }

    return await response.json();
}


export const toggleTodoStatus = async (id: number, isChecked: boolean, token: string) => {
  const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.TODOS}/${id}`, {
    method: 'PATCH',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` 
    },
    body: JSON.stringify({ checked: isChecked }),
  });
  return response.json();
}

export const deleteTodo = async (id: number, token: string) => {

    const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.TODOS}/${id}`, {
      method: 'DELETE',
      headers: { 
        'Content-Type': 'application/json', 
				'Authorization': `Bearer ${token}`,
    	}
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Deleting failed.');
    }

    return await response.json();
}
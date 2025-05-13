const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

export const fetchAPI = async (endpoint, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
};

export const api = {
  exhibitions: {
    getCurrent: () => fetchAPI('/exhibitions/current'),
    getUpcoming: () => fetchAPI('/exhibitions/upcoming'),
  },
  // Add more API endpoints as needed
};

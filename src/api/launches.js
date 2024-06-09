const API_ENDPOINTS = {
	fetchLaunches: 'https://api.spacexdata.com/v3/launches'
};

export const fetch_launches_list = async (params = {}) => {
	const response = await fetch(API_ENDPOINTS.fetchLaunches, params);
	const result = await response.json();
	return result;
};

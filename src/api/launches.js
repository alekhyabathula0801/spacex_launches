const API_ENDPOINTS = {
  fetchLaunches: "https://api.spacexdata.com/v3/launches",
};

export const fetch_launches_list = async (params = {}) => {
  const url = buildUrlWithQueryParams(API_ENDPOINTS.fetchLaunches, params);
  const response = await fetch(url);
  const result = await response.json();
  return result;
};

const buildUrlWithQueryParams = (uri, params = {}) => {
  let newUrl = uri;
  let separator = uri.includes("?") ? "&" : "?";

  Object.entries(params).forEach(([key, value]) => {
    if (key) {
      newUrl += separator + key + "=" + value;
      if (separator === "?") separator = "&";
    }
  });

  return newUrl;
};

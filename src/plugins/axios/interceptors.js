function setParams(config) {
  const newConfig = config;
  const params = newConfig.params || {};

  newConfig.params = Object.assign(params, {
    api_key: process.env.VUE_APP_API_KEY,
  });

  return newConfig;
}

function returnData(res) {
  return res.data;
}

export default function (axios) {
  axios.interceptors.request.use(setParams);
  axios.interceptors.response.use(returnData);
}

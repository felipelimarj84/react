import axios from 'axios'
const instance = axios.create({
	baseURL: process.env.REACT_APP_QUESTOES_API,
	headers: {
		'Content-Type': 'application/json'
	}
})

instance.interceptors.request.use(config => {
	config.headers['questoes-token'] =  axios.defaults.headers["repov4-token"]
	return config
})

export default instance

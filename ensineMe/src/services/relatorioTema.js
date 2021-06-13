import axios from 'axios'
const clientess = {}

const API_TEMA = process.env.REACT_APP_TEMA_API

clientess.find = (params) =>
	axios.request({
		method: "get",
		baseURL: API_TEMA,
		url: '/relatorio?skip=0'
	})

export { clientess }

import axios from 'axios'

const dashboard = {}

dashboard.find = (params) => {
	console.log('params', params)
	const filters = {
		ano: params.ano
	}

	return axios.get('/dashboard', { params: filters })
}

dashboard.findMoth = (ano) => {
	const filter = {
		ano: ano
	}
	return axios.get('/dashboard/objetos/mes', { params: filter })
}

export { dashboard }

import axios from 'axios'

const categorias = {}

categorias.find = (params) => {
	let filters = {
		ordenarPor: params && params.ordenarPor ? params.ordenarPor : 'Nome',
		ordem: params && params.ordem ? params.ordem : 'asc',
		status: params && params.status ? params.status : 1
	}

	if (params && params.tipoId) {
		filters = {
			...filters,
			tipoId: params.tipoId
		}
	}

	return axios.get('/categorias', { params: filters })
}
categorias.findById = id => axios.get(`/categorias/${id}`)
categorias.findByTipo = tipoId => axios.get(`/categorias?tipoId=${tipoId}`)
categorias.create = data => axios.post('/categorias', data)
categorias.update = (id, data) => axios.put(`/categorias/${id}`, data)
categorias.delete = id => axios.delete(`/categorias/${id}`)

export { categorias }

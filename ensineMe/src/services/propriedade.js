import axios from 'axios'

const atributos = {}

atributos.find = (params) => {
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

	return axios.get('/propriedades', { params: filters })
}
atributos.findById = id => axios.get(`/propriedades/${id}`)
atributos.findByTipo = tipoId => axios.get(`/propriedades/tipo/${tipoId}`)
atributos.create = data => axios.post('/propriedades', data)
atributos.update = (id, data) => axios.put(`/propriedades/${id}`, data)
atributos.delete = id => axios.delete(`/propriedades/${id}`)

export { atributos }

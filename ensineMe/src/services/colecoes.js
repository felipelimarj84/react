import axios from 'axios'

const colecoes = {}

colecoes.find = (params) => {
	const filters = {
		usuario: params && params.usuario ? params.usuario : '',
		status: params && params.status ? params.status : '',
		termo: params && params.termo ? params.termo : '',
		quantidade: params && params.quantidade ? params.quantidade : 20,
		ordenarPor: params && params.ordenarPor ? params.ordenarPor : 'dtInsert',
		ordem: params && params.ordem ? params.ordem : 'desc',
		skip: params && params.skip ? params.skip : 0,
		onlyRoot: params && params.onlyRoot ? params.onlyRoot : false
	}
	return axios.get('/colecoes', { params: filters })
}
colecoes.findById = (id) => axios.get(`/colecoes/${id}/objetos`)
colecoes.findByIdInTree = (id) => axios.get(`/colecoes/${id}/em_arvore`)

export { colecoes }

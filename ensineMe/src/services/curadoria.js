import axios from 'axios'

const curadoria = {}

curadoria.find = () => axios.get('/curadoria/em_arvore')
curadoria.findById = id => axios.get(`/curadoria/${id}`)
curadoria.findByActive = () => axios.get('/curadoria/ativos')
curadoria.findByUser = (params) => {
	const filters = {
		id: params && params.id ? params.id : '',
		perfil: params && params.perfil ? params.perfil : ''
	}
	return axios.get('/curadoria/obter_por_usuario', { params: filters })
}
curadoria.findByActiveInTree = () => axios.get('/curadoria/ativos_em_arvore')
curadoria.create = data => axios.post('/curadoria', data)
curadoria.update = (id, data) => axios.put(`/curadoria/${id}`, data)
curadoria.delete = id => axios.delete(`/curadoria/${id}`)
curadoria.exportTree = () => axios.get('/curadoria/exportarEixos')

export { curadoria }

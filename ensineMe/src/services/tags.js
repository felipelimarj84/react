import axios from 'axios'

const tags = {}
tags.findByNome = (nome, identificador) => {
	const filters = {
		nome: nome,
		identificador: identificador
	}
	return axios.get('/tags', { params: filters })
}
tags.findByIdentificador = id => axios.get(`/tags/identificador/${id}`)
tags.obterPorNomeEIdentificador = (nome, identificador) => axios.get(`/tags/obterPorNome?nome=${nome}&identificador=${identificador}`)

export { tags }

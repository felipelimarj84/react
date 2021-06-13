import axios from 'axios'
const integracao = {}

integracao.obterStatus = (params) => {
	const filters = {
		listaerrosobjeto: params & params.listaerrosobjeto ? params.listaerrosobjeto : 'N',
		objeto: params & params.objeto ? params.objeto : '',
		tema: params & params.tema ? params.tema : ''
	}

	return axios.get('/integracao/obterStatus', { params: filters })
}

integracao.obterUrl = (temaId) => {
	return axios.get('/integracao/obterUrl', { params: temaId })
}

export { integracao }

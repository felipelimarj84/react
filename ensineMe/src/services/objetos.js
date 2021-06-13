import axios from 'axios'
import moment from 'moment-timezone'
import { formatCode } from '@/helpers/objectCode'

const objetos = {}

objetos.prepareFilters = (params) => {
	const filters = {}

	if (params && params.texto && params.texto !== '') filters.texto = params.texto
	if (params && params.dono && params.dono !== '') filters.dono = params.dono
	if (params && params.curadoria && params.curadoria !== '') filters.curadorias = params.curadoria
	if (params && params.subcuradoria && params.subcuradoria !== '') filters.subcuradorias = params.subcuradoria
	if (params && params.eixo && params.eixo !== '') filters.eixos = params.eixo
	if (params && params.tipo && params.tipo !== '') filters.tipos = params.tipo
	if (params && params.usuario && params.usuario !== '') filters.usuario = params.usuario
	if (params && params.tipoData && params.tipoData !== '') filters.tipoData = params.tipoData
	if (params && params.data && params.data !== '') filters.dataI = moment.tz(params.data, 'America/Sao_Paulo').format('YYYY-MM-DD')
	if (params && params.dataFim && params.dataFim !== '') filters.dataF = moment.tz(params.dataFim, 'America/Sao_Paulo').format('YYYY-MM-DD')
	if (params && params.dataFim && params.dataFim !== '') filters.dataF = moment.tz(params.dataFim, 'America/Sao_Paulo').format('YYYY-MM-DD')
	if (params && params.codigo && params.codigo !== '') filters.codigo = formatCode(params.codigo)
	if (params && params.status && params.status !== '') filters.status = params.status
	if (params && params.importacao && params.importacao !== '') filters.importacao = params.importacao

	return filters
}

objetos.find = (params, paginate = true) => {
	const filters = objetos.prepareFilters(params)
	filters.ordenarPor = params && params.ordenarPor ? params.ordenarPor : 'Nome'
	filters.ordem = params && params.ordem ? params.ordem : 'asc'

	if (paginate) {
		filters.take = params && params.quantidade ? params.quantidade : 20
		filters.skip = params && params.skip ? params.skip : 0
	}

	return axios.get('/objetos', { params: filters })
}

objetos.findByNameOrCode = data => axios.get('/objetos/titulo_codigo/' + encodeURI(data.texto))

objetos.findByQuestionsEnabled = (curadoriaId, tipoObjeto) => {
	if (!curadoriaId) return false

	let qs = ''
	qs += `?curadorias=${curadoriaId}`
	qs += tipoObjeto ? `&tipoId=${tipoObjeto}` : ''
	return axios.get('/objetos/obter_cadastro_questao' + qs)
}
objetos.findById = id => axios.get(`/objetos/${id}`)
objetos.findByTag = id => axios.get(`/objetos/tag/identificador/${id}`)
objetos.findByTitulo = titulo => axios.get(`/objetos/listar_por_titulo/${titulo}`)
objetos.create = data => axios.post('/objetos', data)
objetos.update = (id, data) => axios.put(`/objetos/${id}`, data)
objetos.delete = id => axios.delete(`/objetos/${id}`)
objetos.importacao = data => axios.post('/importacao/objetos', data)
objetos.getPDF = (url, name) => {
	axios({
		url: `/objetos/${url}`,
		method: 'GET',
		responseType: 'blob'
	}).then((response) => {
		var fileURL = window.URL.createObjectURL(new Blob([response.data]))
		var fileLink = document.createElement('a')

		fileLink.href = fileURL
		fileLink.setAttribute('download', name)
		document.body.appendChild(fileLink)

		fileLink.click()
	})
}

objetos.getTotal = (params) => {
	let filters = {}

	if (params && params.categorias && params.categorias.length > 0) {
		filters = {
			...filters,
			categorias: params.categorias
		}
	}

	if (params && params.tags && params.tags.length > 0) {
		filters = {
			...filters,
			tags: params.tags
		}
	}

	if (params && params.status) {
		filters = {
			...filters,
			status: params.status
		}
	}

	if (params && params.nome && params.nome !== '') filters.nome = params.nome

	if (params && params.usuario && params.usuario !== '') filters.usuario = params.usuario

	return axios.get('/objetos/obterTotal', { params: filters })
}

objetos.publish = data => axios.post('/objetos/publicar', data)
objetos.processReport = async params => {
	let request = null
	if (params === false) {
		request = axios.get('/objetos/exportarObjetos')
	} else {
		const filters = objetos.prepareFilters(params)
		// filters.skip = 0

		request = axios.get('/objetos/exportarObjetos', { params: filters })
	}

	return request
}

export { objetos }

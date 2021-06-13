import apiQuestoes from './api/questoes'
import moment from 'moment-timezone'
import escapeString from '@/helpers/escapeString'
import { formatCode } from '@/helpers/questionCode'

const questoes = {
	findTipos: () => apiQuestoes.get('/tipoQuestao?skip=0'),
	prepareFilters: (params) => {
		const filters = {
			curadorias: params && params.curadoria ? params.curadoria : '',
			subcuradorias: params && params.subcuradoria ? params.subcuradoria : '',
			eixos: params && params.eixo ? params.eixo : '',
			tema: params && params.tema ? params.tema : '',
			enunciado: params && params.enunciado ? params.enunciado : '',
			dataI: params && params.dataInicio ? moment.tz(params.dataInicio, 'America/Sao_Paulo').format('YYYY-MM-DD') : '',
			dataF: params && params.dataFim ? moment.tz(params.dataFim, 'America/Sao_Paulo').format('YYYY-MM-DD') : '',
			tipoData: params && params.tipoData ? params.tipoData : '',
			codigo: params && params.codigo ? formatCode(params.codigo) : '',
			tipoQuestao: params && params.tipoQuestao ? params.tipoQuestao : '',
			status: params && params.statusQuestao ? params.statusQuestao : '',
			nivelDificuldade: params && params.dificuldade ? params.dificuldade : '',
			importacao: params && params.importacao ? params.importacao : ''
		}

		return filters
	},
	treatData: (dataInput) => {
		const data = JSON.parse(JSON.stringify(dataInput))
		data.enunciado = escapeString(data.enunciado)
		data.feedbackPositivo = escapeString(data.feedbackPositivo)
		data.feedbackNegativo = escapeString(data.feedbackNegativo)

		let i = 0
		for (i in data.alternativas) {
			data.alternativas[i].valor = escapeString(data.alternativas[i].valor)
		}

		return data
	},
	find: (params) => {
		const filters = questoes.prepareFilters(params)
		filters.skip = params && params.skip ? params.skip : 0
		filters.take = params && params.take ? params.take : 20

		return apiQuestoes.get('/questoes', { params: filters })
	},
	findQuestionById: id => apiQuestoes.get(`/questoes/${id}`),
	create: data => apiQuestoes.post('/questoes', questoes.treatData(data)),
	update: (id, data) => apiQuestoes.put(`/questoes/${id}`, questoes.treatData(data)),
	delete: (id, curadoriaId) => apiQuestoes.delete('/questoes/' + id + '/curadoria/' + curadoriaId),
	findQuantidadePorCuradoria: (id) => apiQuestoes.get('/tipoQuestao/qtdCuradoria/' + id),
	associarTipoQuestaoCuradoria: (curadoriaId, tipoQuestaoId, qtd) => apiQuestoes.post('/tipoQuestao/qtdCuradoria', { curadoriaId, tipoQuestaoId, qtd }),
	findById: id => apiQuestoes.get(`/questoes/tema/${id}`),
	history: id => apiQuestoes.get(`/historico/${id}`),
	tipoQuestao: () => apiQuestoes.get('/tipoQuestao'),
	processReport: (params) => apiQuestoes.get('/questoes/exportarQuestoes', { params: questoes.prepareFilters(params) })
}

export { questoes }

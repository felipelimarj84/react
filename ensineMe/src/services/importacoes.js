import axios from 'axios'
import apiQuestoes from './api/questoes'

// Objetos
const importacoes = {}

importacoes.find = acao => axios.get(`/importacao${acao ? '&acao=' + acao : ''}`)
importacoes.objectReport = id => axios.get(`/objetos/exportarObjetos?importacao=${id}`)

// Questoes
const importacoesQuestoes = {}

importacoesQuestoes.find = (acao, objeto) => {
	let filter = ''

	if (acao) {
		if (!filter) {
			filter = `?acao=${acao}`
		} else {
			filter += `&acao=${acao}`
		}
	}

	if (objeto) {
		if (!filter) {
			filter = `?objeto=${objeto}`
		} else {
			filter += `&objeto=${objeto}`
		}
	}

	return apiQuestoes.get('/importacao' + filter)
}
importacoesQuestoes.exportModel = () => apiQuestoes.get('/importacao/exportarModelo')

export { importacoes, importacoesQuestoes }

import axios from './api/questoes'

const tipoQuestao = {}
tipoQuestao.obterQtdPorCuradoria = (curadoriaId) => axios.get(`/tipoQuestao/qtdCuradoria/${curadoriaId}`)
tipoQuestao.obterInfoQuestaoCuradoria = (curadoria) => axios.get(`/tipoQuestao/obterInfoQuestaoCuradoria/${curadoria}`)
tipoQuestao.obterInfoQuestaoObjeto = (obj) => axios.get(`/tipoQuestao/obterInfoQuestaoObjeto/${obj}`)
tipoQuestao.create = (data) => axios.post('/tipoQuestao/qtdObjeto', data)
tipoQuestao.createTipoQuestao = (data) => axios.post('/tipoQuestao', data)
tipoQuestao.delete = (id) => axios.delete(`/tipoQuestao/${id}`)
tipoQuestao.findById = (id) => axios.get(`/tipoQuestao/${id}`)
tipoQuestao.update = (id, data) => axios.put(`/tipoQuestao/${id}`, data)
tipoQuestao.find = () => axios.get('/tipoQuestao?skip=0')
tipoQuestao.exportTree = () => axios.get('/tipoQuestao/exportarTipos')
export { tipoQuestao }

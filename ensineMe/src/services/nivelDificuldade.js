import axios from './api/questoes'

const nivelDificuldade = {}
nivelDificuldade.create = (data) => axios.post('/nivelDificuldade', data)
nivelDificuldade.delete = (id) => axios.delete(`/nivelDificuldade/${id}`)
nivelDificuldade.findById = (id) => axios.get(`/nivelDificuldade/${id}`)
nivelDificuldade.update = (id, data) => axios.put(`/nivelDificuldade/${id}`, data)
nivelDificuldade.find = () => axios.get('/nivelDificuldade?skip=0')
nivelDificuldade.exportTree = () => axios.get('/nivelDificuldade/exportar')
export { nivelDificuldade }

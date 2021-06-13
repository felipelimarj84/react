import axios from 'axios'

const tipos = {}

tipos.find = (data) => axios.get('/tipos', { params: data })
tipos.findById = id => axios.get(`/tipos/${id}`)
tipos.findByActive = () => axios.get('/tipos/ativos')
tipos.create = data => axios.post('/tipos', data)
tipos.update = (id, data) => axios.put(`/tipos/${id}`, data)
tipos.delete = id => axios.delete(`/tipos/${id}`)
tipos.exportModel = id => axios.get('/objetos/exportarModelo/' + id)

export { tipos }

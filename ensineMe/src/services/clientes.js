import axios from 'axios'
// import unirest from 'unirest'
const clientes = {}

// const token = ''

const API_TEMA = process.env.REACT_APP_TEMA_API
clientes.find = (params) =>
	axios.request({
		method: 'get',
		baseURL: API_TEMA,
		url: '/clientes?skip=0',
	})
		// .headers({ 'Content-Type': 'application/json', 'temas-token': token })
		// .qs({ skip: '0'})

// clientes.findById = id =>
// 	unirest.get(API_TEMA + `/clientes/${id}`)
// 		.headers({ 'Content-Type': 'application/json', 'temas-token': token })

// clientes.findByActive = () =>
// 	unirest.get(API_TEMA + '/clientes/ativos')
// 		.headers({ 'Content-Type': 'application/json', 'temas-token': token })

// clientes.create = data =>
// 	unirest.post(API_TEMA + '/clientes')
// 		.headers({ 'Content-Type': 'application/json', 'temas-token': token })
// 		.send(data)

// clientes.update = (id, data) =>
// 	unirest.put(API_TEMA + `/clientes/${id}`)
// 		.headers({ 'Content-Type': 'application/json', 'temas-token': token })
// 		.send(data)

// clientes.delete = id =>
// 	unirest.delete(API_TEMA + `/clientes/${id}`)
// 		.headers({ 'Content-Type': 'application/json', 'temas-token': token })

export { clientes }

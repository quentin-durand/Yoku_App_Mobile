export const HEADERS = new Headers({
	'Content-Type': 'application/json',
	Accept: 'application/json',
	Authorization: 'Bearer VotreCléAPI',
})
export const API_URI = 'http://localhost:8080/api'

import * as types from '../constants/ActionTypes'

export const requestTodos = () => ({
    type: types.REQUEST_TODOS,
    loading: true,
})
export const requestTodosSuccess = (todos) => ({
    type: types.REQUEST_TODOS_SUCCESS,
    todos,
    loading: false,
})
export const requestTodosError = (error) => ({
    type: types.REQUEST_TODOS_ERROR,
    loading: false,
    error,
})
import { ADD_USER, EDIT_USER, DELETE_USER } from './actionTypes'

let nextUserId = 0

export const addUser = (content) => ({
  type: ADD_USER,
  payload: {
    id: ++nextUserId,
    content,
  },
})

export const editUser = (id, content) => ({
  type: EDIT_USER,
  payload: {
    id: id,
    content: content,
  },
})

export const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: { id },
})

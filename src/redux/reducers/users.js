import { ADD_USER, EDIT_USER, DELETE_USER } from '../actions/actionTypes'

const initialState = {
  users: [],
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      const { id, content } = action.payload
      content.id = id
      return {
        ...state,
        users: [...state.users, content],
      }
    }
    case EDIT_USER: {
      const { id, content } = action.payload
      content.id = id + 1
      state.users.splice(id, 1, content)
      return {
        ...state,
        users: [...state.users],
      }
    }
    case DELETE_USER: {
      let { id } = action.payload
      state.users.splice(id, 1)
      return {
        ...state,
        users: [...state.users],
      }
    }
    default:
      return state
  }
}

export default rootReducer

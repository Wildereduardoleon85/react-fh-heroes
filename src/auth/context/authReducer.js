import { types } from '../types/types'

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case types.login:
      return {
        ...state,
        logged: true,
        user: payload,
      }

    case types.logout:
      return {
        ...state,
        logged: false,
        user: {
          id: '',
          name: '',
        },
      }

    default:
      return state
  }
}

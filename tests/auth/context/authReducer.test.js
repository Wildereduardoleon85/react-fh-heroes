import { authReducer } from '../../../src/auth/context'
import { types } from '../../../src/auth/types/types'

describe('authReducer', () => {
  const initialState = {
    logged: false,
    user: {
      id: '',
      name: '',
    },
  }

  test('it must return the initial state', () => {
    const newState = authReducer(initialState, {})
    expect(newState).toBe(initialState)
  })

  test('it must log the user in', () => {
    const action = {
      type: types.login,
      payload: {
        id: '1234',
        name: 'Kevin Garnet',
      },
    }

    const newState = authReducer(initialState, action)

    expect(newState).toEqual({
      logged: true,
      user: action.payload,
    })
  })

  test('it must logs the user out', () => {
    const currentState = {
      logged: true,
      user: {
        id: '777',
        name: 'Simón Bolívar',
      },
    }

    const action = {
      type: types.logout,
    }

    const newState = authReducer(currentState, action)

    expect(newState).toEqual(initialState)
  })
})

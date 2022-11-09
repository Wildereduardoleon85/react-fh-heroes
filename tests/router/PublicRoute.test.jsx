import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../../src/auth'
import { PublicRoute } from '../../src/router/PublicRoute'

describe('<PublicRoute />', () => {
  test('debe de mostrar el children si no está autenticado', () => {
    const contextValue = {
      logged: false,
    }

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Public Route</h1>
        </PublicRoute>
      </AuthContext.Provider>
    )

    expect(screen.getByText('Public Route')).toBeTruthy()
  })

  test('debe navegar si está autenticado', () => {
    const contextValue = {
      logged: true,
      user: {
        id: '123',
        name: 'Johnny be good',
      },
    }

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route path='marvel' element={<h1>Marvel Page</h1>} />
            <Route
              path='login'
              element={
                <PublicRoute>
                  <h1>Public Route</h1>
                </PublicRoute>
              }
            />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getByText('Marvel Page')).toBeTruthy()
  })
})

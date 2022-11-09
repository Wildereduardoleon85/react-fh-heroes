import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from '../../../src/auth'
import { Navbar } from '../../../src/ui/components'

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}))

describe('<Navbar />', () => {
  const contextValue = {
    logged: true,
    user: {
      id: '123',
      name: 'James Bond',
    },
  }

  beforeEach(() => jest.clearAllMocks())

  test('debe de mostrar el nombre del usuario que está logeado', () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getByText(contextValue.user.name)).toBeTruthy()
  })

  test('debe de llamar el logout y navigate cuando se hace click al botón', () => {
    const logout = jest.fn()

    render(
      <AuthContext.Provider value={{ ...contextValue, logout }}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    const logoutButton = screen.getByRole('button')

    fireEvent.click(logoutButton)

    expect(logout).toHaveBeenCalled()
    expect(mockedUseNavigate).toHaveBeenCalledWith('/login', { replace: true })
  })
})

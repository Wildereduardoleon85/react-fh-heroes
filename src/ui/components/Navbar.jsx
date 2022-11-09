import { useContext } from 'react'
import { Link, NavLink as RouterNavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth'

const NavLink = ({ path, textContent }) => {
  return (
    <RouterNavLink
      className={({ isActive }) =>
        `nav-item nav-link ${isActive ? 'active' : ''}`
      }
      to={path}
    >
      {textContent}
    </RouterNavLink>
  )
}

const routes = [
  { path: '/marvel', textContent: 'Marvel' },
  { path: '/dc', textContent: 'DC' },
  { path: '/search', textContent: 'Search' },
]

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const onLogout = () => {
    logout()
    navigate('/login', {
      replace: true,
    })
  }

  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark p-2'>
      <Link className='navbar-brand' to='/'>
        Asociaciones
      </Link>

      <div className='navbar-collapse'>
        <div className='navbar-nav'>
          {routes.map((route) => (
            <NavLink
              key={route.textContent}
              path={route.path}
              textContent={route.textContent}
            />
          ))}
        </div>
      </div>

      <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
        <ul className='navbar-nav ml-auto'>
          <span className='nav-item nav-link text-primary'>{user.name}</span>
          <button className='nav-item nav-link btn' onClick={onLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  )
}

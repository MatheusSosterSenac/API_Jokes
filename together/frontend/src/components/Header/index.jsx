import viteLogo from '../../../public/vite.svg'
import reactLogo from '../../assets/react.svg'
import { Link, useLocation } from 'react-router-dom';
import './styles.css'
import LogoutButton from '../Logout';
import { useContext } from 'react';
import { AuthContext } from '../../auth/context';

export default function Header() {
  const {token} = useContext(AuthContext)
  const location = useLocation();
  const isLoginRoute = location.pathname === '/';


  return (
    <div>
    <header>
    <h1>Minha Página React</h1>
    <img src={reactLogo} alt='Logo do React' />
    <img src={viteLogo} alt='Logo do Vite' />
    {
        !isLoginRoute && !token
            ? <Link to="/">Entrar</Link>
            : null
    }
    {token &&<LogoutButton /> }
</header>
{
  !isLoginRoute &&
      <nav className="menu">
          <ul>
              <Link to="/home">
                  <li>Home</li>
              </Link>
             {token && <Link to="/jokes">
                  <li>Piadas Api</li>
              </Link>}
              {token && <Link to="/liberty">
                  <li>Liberdade de expressão</li>
              </Link>}
              {token && <Link to="/comedians">
                  <li>Humoristas</li>
              </Link>}
              {token && <Link to="/about">
                  <li>Sobre</li>
              </Link>}
              {token && <Link to="/profiles">
                  <li>Seu Perfil</li>
              </Link>}
          </ul>
      </nav>
  }
          </div>

  );
}

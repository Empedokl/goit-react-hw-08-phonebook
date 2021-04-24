import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

const Navigation = () => {
  const isloggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink
        to="/"
        exact
        className={style.link}
        activeClassName={style.activeLink}
      >
        Главная
      </NavLink>

      {isloggedIn && (
        <NavLink
          to="/contacts"
          exact
          className={style.link}
          activeClassName={style.activeLink}
        >
          Контакти
        </NavLink>
      )}
    </nav>
  );
};
export default Navigation;

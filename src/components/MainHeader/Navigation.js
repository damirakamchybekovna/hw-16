//cansumer сакталган данныйды кансюмер алып берет колбек функция жазышыбыз керекю кантекстибиздин ичинде эмне данный болсо алып беретб бизге параметр катары берет

import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './Navigation.module.css';
const Navigation = (props) => {
  const contextData = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {contextData.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {contextData.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {contextData.isLoggedIn && (
          <li>
            <button onClick={contextData.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default Navigation;
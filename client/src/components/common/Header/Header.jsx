import styles from './Header.module.scss';
import Hamburger from './Hamburger/Hamburger';


import userImage from '../../../images/header/user.svg';
import arrowImage from '../../../images/header/arrow.svg';
import authImage from '../../../images/header/dumbell.svg';

import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { isAuth } = useAuth();

  return (
    <header className={styles.header}>
      {location.pathname === '/' ? (
        <button type='button'
          onClick={() => navigate(isAuth ? '/profile' : '/auth')}
        >
          <img src={isAuth ? authImage : userImage} alt='Auth' onClick={() => navigate('/auth')} height='40' />
        </button>
      ) : (
        <button type='button' onClick={() => navigate(-1)}>
          <img src={arrowImage} alt='Auth' />
        </button>
      )}

      <Hamburger />
    </header>
  );
};

export default Header;

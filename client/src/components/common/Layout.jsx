import styles from './Layout.module.scss';
import cn from 'classnames';
import Header from './Header/Header';

const Layout = ({ children, bgImage, heading = '' }) => {
  return (
    <div
      className={cn(styles.wrapper, {
        [styles.otherPage]: heading,
      })}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Header />
      {heading && <h1 className={styles.heading}>{heading}</h1>}
      {children && <div>{children}</div>}
    </div>
  );
};

export default Layout;

import React, { useState } from 'react';
import Layout from '../../common/Layout';

import bgImage from '../../../images/new-workout.jpg';
import Field from '../../ui/Field/Field';
import Button from '../../ui/Button/Button';
import styles from './Auth.module.scss';
import Alert from '../../ui/Alert/Alert';
import { useMutation } from 'react-query';
import { $api } from '../../../api/api';
import Loader from '../../ui/Loader';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('auth');

  const { setIsAuth } = useAuth();

  const navigate = useNavigate();

  const {
    mutate: register,
    isLoading,
    error,
  } = useMutation('Registration', () =>
    $api({
      url: '/users',
      type: 'POST',
      body: { email, password },
      auth: false,
    }), {
      onSuccess(data) {
        localStorage.setItem('token', data.token)
        setIsAuth(true);

        setPassword('');
        setEmail('');

        navigate('/');
      }
    }
  );

  const handleSubmit = e => {
    e.preventDefault();
    if (type === 'auth') {
      console.log('Auth');
    } else {
      register();
    }
  };

  return (
    <>
      <Layout bgImage={bgImage} heading='Auth' />
      <div className='wrapper-inner-page'>
        {error && <Alert type='error' text={error} />}
        {isLoading && <Loader />}
        <form onSubmit={handleSubmit}>
          <Field placeholder='Enter email' value={email} onChange={e => setEmail(e.target.value)} />
          <Field
            placeholder='Enter password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <div className={styles.wrapperButtons + ' block'} data='oop'>
            <Button text='Sign In' callback={() => setType('auth')} />
            <Button text='Sign Up' callback={() => setType('reg')} />
          </div>
        </form>
      </div>
    </>
  );
};

export default Auth;

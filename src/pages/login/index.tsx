import React, { useContext, useEffect, useState } from 'react';
import './index.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import UserContext from '@/context/user';
import { useJwt } from "react-jwt";
import jwt_decode from "jwt-decode";
import { TokenDecryptInfo } from '@/types/token-decrypt-type';

export default () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const history = useHistory()

  const { state, setState: setGlobalState } = useContext(UserContext);

  useEffect(() => {
    console.log('adasnkanfds', state)
    if (state.token !== '') {
      history.push('/orders');
    }
  }, [state]);

  const loginAction = async (event) => {
    event.preventDefault();
    const { data } = await axios.post('http://localhost:9000/api/public/v1/auth-customer', {
      email,
      password,
    });
    const infoDecrypted = jwt_decode<{ data: TokenDecryptInfo }>(data.token);
    setGlobalState({
      name: infoDecrypted.data.name,
      email: infoDecrypted.data.email,
      token: data.token,
    });
    history.push('/orders');
  }

  return (
    <div className='Form'>
      <div className='Header'>
        <h1>Login</h1>
      </div>
      <form className='FormInput' >
        <input value={email} onChange={e => setEmail(e.target.value)} type='text' placeholder='Email' />
        <input value={password} onChange={e => setPassword(e.target.value)} type='password' placeholder='Password' />
        <a onClick={() => history.push('/register')}>Registre-se agora</a>
        <button onClick={loginAction}>Login</button>
      </form>
    </div>
  );
}
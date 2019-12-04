import React, { useState } from 'react';
import './Login.scss';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const requestAccessToken = () => {
    props.history.push('/home');
  };
  return (
    <div className="login">
      <div className="login__header">
        <h1>Bem Vindo ao Todo</h1>
      </div>
      <div className="login__form">
        <input
          id="email"
          onChange={e => setEmail(e.target.value)}
          type="text"
          className="form-control"
          name="email"
          placeholder="Email"
        />
        <input
          id="password"
          onChange={e => setPassword(e.target.value)}
          type="password"
          className="form-control"
          name="password"
          placeholder="Senha"
        />
        <button type="submit" onClick={requestAccessToken}>
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Login;

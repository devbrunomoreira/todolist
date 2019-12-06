import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import * as action from '../../actions';
import './Login.scss';
import 'react-toastify/dist/ReactToastify.css';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isLogginIn = useSelector(state => state.authState.isLogginIn);
  const error = useSelector(state => state.authState.error);

  const requestAccessToken = () => {
    const payload = { email, password };
    dispatch(action.requestLogin(payload));
  };
  const loginFB = () => {
    dispatch(action.requestLoginFb());
  };
  useEffect(() => {
    if (isLogginIn === true) {
      props.history.push('/home');
    }
  }, [isLogginIn]);

  useEffect(() => {
    if (error !== '') {
      toast.error(error);
      console.log('toast erro', error);
    }
  }, [error]);

  return (
    <div className="login">
      <ToastContainer
        position="top-right"
        autoClose={9999}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
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
        <button
          type="submit"
          onClick={loginFB}
          className="loginBtn loginBtn--facebook"
        >
          <span className="">Login with Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default Login;

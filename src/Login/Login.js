import React from 'react';
import classes from './Login.css';

const login = ( props ) => {
  return (
    <div className={ classes.Loginbox }>
      <h1>Autentica Brasil</h1>

      <div className={ classes.Inputs }>
        <label htmlFor="">Usuário</label>
        <input type="text"/>

        <label htmlFor="">Senha</label>
        <input type="password"/>
        <a href="#">Forgot your password?</a>
        <button>Entrar</button>
      </div>
    </div>
  ) 
};


export default login;
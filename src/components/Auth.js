import React, { useState } from 'react';
import classes from './Auth.module.css';
import { authActions } from '../store/auth-slice'
import { useDispatch } from 'react-redux'

const Auth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(authActions.login())
  }
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleLogin}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' id='password' />
          </div>
          <button >Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;

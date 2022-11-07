import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css'


function LoginForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [showLoginModal, setShowLoginModal] = useState(false);

  // const [showModal, setShowModal] = useState(false);


  if (sessionUser) return <Redirect to="/" />;

  const demoLogin = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.login({ credential: "lb@demo.com", password: "password" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);

    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  }

  const handleClick = e => {
    e.preventDefault();
    console.log('hey')
    setShowLoginModal(false)
    // setShowModal(false)

  }

  return (
    <>
    <h1 className='login-headings'>Log in</h1> 
      {/* <p>Log in to your Grailed account to buy, sell, comment, and more.</p> */}
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>

        <label>
          Email Address <br></br> </label>
          <input
            type="text"
            className='log_in_inputs'
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        <br></br>
        <label>
          Password     </label>
          <input
            type="password"
            className='log_in_inputs'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
    <br></br>
        <div id='btns'>      
          <button type="submit" className='login_button' >Log in</button>
          <button type="submit" className='login_button' onClick={demoLogin}>Demo User</button>
        </div>


      </form>
    </>
  );
}

export default LoginForm;

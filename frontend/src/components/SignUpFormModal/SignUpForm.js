import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function SignUpForm() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
  
    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault()
        return dispatch(sessionActions.signup({email, password}))
        .catch(async (res) => {
            let data;
            try {
              data = await res.clone().json();
            } catch {
              data = await res.text(); 
            }
            if (data?.errors) setErrors(data.errors);
            else if (data) setErrors([data]);
            else setErrors([res.statusText]);
          });
    }

    const handleClick = e => {
      e.preventDefault();
  
    }

    return (
      <>
        <h1 className='login-headings'>Sign up</h1> 
          <form onSubmit={handleSubmit}>
            <ul>
              {errors.map(error => <li key={error}>{error}</li>)}
            </ul>

            <label>
              Email Address</label> 
              <input
                type="text"
                value={email}
                className='log_in_inputs'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <br></br>
            
            <label>
              Password      </label>
              <input
                type="password"
                value={password}
                className='log_in_inputs'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
       
            <button type="submit" className='login_button'>SIGN UP</button>
          </form> 
    </>
    )

}

export default SignUpForm
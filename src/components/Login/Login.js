import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useUpdatePassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';
import pin from '../../images/pin.png';
import { Button, Toast, ToastContainer} from 'react-bootstrap';

import GoogleLogin from './GoogleLogin';

const Login = () => {
    
    const [updatePassword, updating] = useUpdatePassword(auth);

    const [showA, setShowA] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const toggleShowA = () => setShowA(!showA);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    



    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>

            <div>

                <h2 className='form-title'>Login</h2>
                <p><img width='30px' src={pin} alt="" />
                    new to <span style={{ color: 'blue' }}>RA Immigration Consultancy?</span> <Link className='form-link' to="/signup">Create an account</Link>
                </p>
                <p><img width='30px' src={pin} alt="" />
                    forgot <span style={{ color: 'blue' }}>Password?</span> <button onClick={toggleShowA}>
                        Reset Passward
                    </button>
                </p>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <p>Email</p>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label><br/>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                
                <GoogleLogin></GoogleLogin>

                <ToastContainer position='middle-center'>

                <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Reset Your Password Here</strong>
            
          </Toast.Header>
          <Toast.Body>
          <input
        placeholder='enter new password'
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /> <br/> <br />
      <button onClick={async () => {
          await updatePassword(email);
          alert('Updated password');
        }}
      > 
        Update password
      </button>
     
              
              
              </Toast.Body>
        </Toast>
        </ToastContainer>

            </div>
        </div>
    );
};

export default Login;
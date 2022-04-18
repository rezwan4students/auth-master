import React from 'react';
import google from '../../images/google-transparent.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
    const [
        signInWithGoogle,
        user,
        loading,
        error,
    ] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    if (error) {
        return (
          <div>
            <p style={{color:'red'}}>Error: {error.message}</p>
          </div>
        );
      }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='google-div'>
                    <div className='line'>

                    </div>
                    <h3>OR</h3>
                    <div className='line'>

                    </div>
                </div>
                <div style={{ textAlign: "center" }}>
                    <button onClick={()=>signInWithGoogle()}><div className='google-sign-in'>
                        <img width='50px' src={google} alt="" />
                        <h3>Sign in with Google</h3>
                    </div>
                    </button>
                </div>
        </div>
    );
};

export default GoogleLogin;
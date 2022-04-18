import React, { useState } from 'react';
import { useUpdatePassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Reset = () => {
    const [password, setPassword] = useState('');

    const [updatePassword, updating, error] = useUpdatePassword(auth);
    return (
        <div className="App">
            <br /><br /><br />
      <input
        placeholder='enter new password'
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={()=>updatePassword()}   
      >
        Update password
      </button>
      <br /><br /><br /><br /><br />
    </div>
    );
};

export default Reset;
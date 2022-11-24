import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleGoogleSIgnIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="btn btn-outline w-full">
            
            <p className='text-center'>
                <button onClick={handleGoogleSIgnIn} className='btn btn-ghost'>Continue with Google</button>
            </p>
        </div>
    );
};

export default SocialLogin;
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './SignIn.css';

const SignIn = () => {
    const { logInWithPopup, setUser, setError } = useAuth();
    const location = useLocation();
    const redirect_uri = location?.state?.from ? location.state.from : '/';
    const history = useHistory();
    const logInAndRedirect = () => {
        logInWithPopup()
            .then(result => {
                setUser(result.user);
                history.push(redirect_uri);
            })
            .catch(err => setError(err.message));
    }
    return (
        <div>
            <div className='bg-sign-in bg-cover bg-center text-white flex justify-center items-center'>
                <h2 className='text-5xl'>Sign In</h2>
            </div>
            <div className='sign-in flex items-center justify-center'>
                <div className='flex flex-col border-2 rounded-lg justify-center md:w-96 w-full md:m-0 mx-2'>
                    <p className='py-5 px-2 font-bold text-xl text-gray-700'>New or existing customer? No worry! Click to Sign In.</p>
                    <div className='flex items-center bg-red-500 text-white cursor-pointer shadow-lg rounded-b-lg' onClick={logInAndRedirect}>
                        <div>
                            <img src="https://img.icons8.com/carbon-copy/100/ffffff/google-logo.png" alt='' />
                        </div>
                        <h3 className='text-2xl ml-3 font-bold'>Google Sign In</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
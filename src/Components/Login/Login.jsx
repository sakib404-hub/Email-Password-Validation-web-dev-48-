import { sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { auth } from '../../Firebase/firebase.config';

const Login = () => {
    const [error, setError] = useState('');


    const handleLoginInformation = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        setError('');

        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                sendEmailVerification(result.user)
                    .then(() => {
                        alert('Please Register with Valid Email Address!');
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch((error) => {
                setError(error);
            })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center">Login now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body space-y-3">
                            <form
                                onSubmit={handleLoginInformation}>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input
                                        type="email"
                                        className="input" placeholder="Email"
                                        name='email' />
                                    <label className="label">Password</label>
                                    <input
                                        type="password"
                                        className="input" placeholder="Password"
                                        name='password' />
                                    <div>
                                        <a className="link link-hover">Forgot password?
                                        </a>
                                    </div>
                                    <button className="btn btn-neutral mt-4">
                                        Login
                                    </button>
                                    {
                                        error && <p
                                            className='text-red-500'>{error}</p>
                                    }
                                    <div className='flex items-center justify-around px-2'>
                                        <p>Don't Have an Account?</p>
                                        <NavLink
                                            to='/register'
                                            className='text-blue-400 underline font-medium'>Register</NavLink>

                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
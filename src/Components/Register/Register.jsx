import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../Firebase/firebase.config';

const Register = () => {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false)

    // handler for the form On submit 
    const handleFormOnSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email);
        // console.log(password);
        // console.log('Button is Clicked!')

        setError('');
        setSuccess(false);

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                setSuccess(true);
                e.target.reset();
            })
            .catch((error) => {
                console.log(error.message);
                setError(error.message)
            })
    }
    return (
        <div>
            <form
                onSubmit={handleFormOnSubmit}>
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold text-center">Register now!</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <div className="card-body">
                                <fieldset className="fieldset">
                                    <label
                                        className="label"
                                        htmlFor='email'>Email
                                    </label>
                                    <input
                                        type="email"
                                        className="input"
                                        placeholder="Email"
                                        name='email'
                                        id='email'
                                        required />
                                    <label
                                        className="label" htmlFor='password'>Password
                                    </label>
                                    <input
                                        type="password"
                                        className="input" placeholder="Password"
                                        name='password'
                                        id='password'
                                        minLength={8}
                                        maxLength={12}
                                        required />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Register</button>
                                </fieldset>
                                {
                                    success && <p
                                        className='text-green-500'>Account Created Successfully!</p>
                                }
                                {
                                    error && <p
                                        className='text-red-500'>{error}</p>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;
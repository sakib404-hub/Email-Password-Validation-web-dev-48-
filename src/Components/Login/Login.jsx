import React from 'react';
import { NavLink } from 'react-router';

const Login = () => {


    const handleLoginInformation = () => {
        console.log('Button is Clicked')
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
                                    <input type="email" className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" className="input" placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Login</button>
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
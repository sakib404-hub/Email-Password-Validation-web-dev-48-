import React from 'react';

const Register = () => {

    // handler for the form On submit 
    const handleFromOnSubmit = (e) => {
        e.preventDefault();
        console.log('Button is Clicked!')
        const email = e.target.email.value;
        console.log(email);
        const password = e.target.password.value;
        console.log(password);
    }
    return (
        <div>
            <form
                onSubmit={handleFromOnSubmit}>
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold text-center">Login now!</h1>
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
                                        required />
                                    <label
                                        className="label" htmlFor='password'>Password
                                    </label>
                                    <input
                                        type="password"
                                        className="input" placeholder="Password"
                                        name='password'
                                        minLength={8}
                                        maxLength={8}
                                        required />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Login</button>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;
import xrainLogo from './xrainLogo.jpg';
import React from "react";

import './Login.css';

const Login = () => {
  //When the user submits the form, prevent the default action, grab the email and password from the form, send a POST request to the backend with the email and password, and if the response is successful, store the token in local storage and reload the page. 
const handleSubmit = async (event) => {
  event.preventDefault();
  const { email, password } = event.target;

  const response = await fetch('http://localhost:3002/api/auth/login', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  });

  const data = await response.json();
  if (response.status === 200) {
    // Token is valid, continue with the application logic
    localStorage.setItem("token", data.token);
    window.location.href = '/'; // Redirect to the desired page
  } else {
    // Token is invalid, redirect to the authentication page
    window.location.href = '/login'; // Replace with the actual authentication page URL
  }
};

  return (
    <div className="login">

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in!
          </h2>
          <img
            className="mx-auto h-50 w-auto"
            src={xrainLogo}
            alt="x-rain logo"
          />
        </div>

      <form onSubmit={handleSubmit}>
        <span>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </span>
        <span>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </span>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

/*
    
const Login = () => {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      }
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

        </div>
      </div>
    </>
  )
};

export default Login;
*/

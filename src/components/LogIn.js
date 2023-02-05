import React, {useEffect} from 'react';
import GithubButton from 'react-github-login-button';

const LogIn = () => {
  const logInWithGithub = () => {
    window.location.href = process.env.REACT_APP_SERVER_URL + '/auth/github';
  }

  useEffect(() => {
    fetch(process.env.REACT_APP_SERVER_URL + "/auth/check", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    })
      .then(response => {
        if(response.status === 200) return window.location.href = process.env.REACT_APP_URL + '/dashboard'
      })
      .catch(error => {
        console.log(error);
      });
  });

  return (
    <div>
      <div className='container'>
        <div className='form--wrapper w-75 m-auto'>
          <div className='submit-wrapper mt-5 w-50 m-auto'>
            <GithubButton
              onClick={logInWithGithub}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogIn
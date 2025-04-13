import React, { Fragment } from 'react';
import Login from './Login'
import Register from './Register'

const LoginSignUp = () => {
    let signUpInPage = (
        <Fragment>
            <div className="row">
                <div className="col-md-5 col-sm-12 bg-light p-3 m-3">
                    <Login/>
                </div>
                <div className="col-md-5 col-sm-12 bg-light p-3 m-3">
                    <Register/>
                </div>
            </div>
        </Fragment>
      );
  return (
      signUpInPage
  );
};
export default LoginSignUp

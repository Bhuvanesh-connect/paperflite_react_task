import React from 'react';
import {Link} from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
  return (
    <div className='PageNotFound'>
        <div>
            <h2>404</h2>
            <p>Page Not Found</p>
            <Link to='/login' className='btn_returnToLogin'> Return to Login Form</Link>
        </div>
    </div>
  )
}

export default PageNotFound
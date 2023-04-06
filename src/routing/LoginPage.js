import React from 'react';
import {Routes,Route} from "react-router-dom";
import LoginForm from '../components/login/LoginForm';
import SuccessMsg from '../components/login/SuccessMsg';
import PageNotFound from '../components/library/404/PageNotFound';
import '../components/login/LoginPage.css'


function LoginPage() {
  return (
    <div className='LoginPage'>
        <div className='row content_row'>
            <div className='col-12 col-lg-6'>
                <Routes>
                    <Route path="/" element={<LoginForm/>} />
                    <Route path="/login" element={<LoginForm/>} />
                    <Route path="/login/success" element={<SuccessMsg/>} />
                    <Route path="*" element={<PageNotFound/>} />
                </Routes>
            </div>
        </div>
    </div>
  )
}

export default LoginPage
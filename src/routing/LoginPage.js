import React from 'react';
import {Routes,Route} from "react-router-dom";
import {Card} from 'react-bootstrap';
import LoginForm from '../components/login/LoginForm';
import SuccessMsg from '../components/login/SuccessMsg';
import PageNotFound from '../components/library/404/PageNotFound';
import brand_logo_and_text from './../../src/assets/brand_logo_and_text.png';
import illustration_openhead from './../../src/assets/illustration_openhead.png';
import illustration_tape from './../../src/assets/illustration_tape.png';
import '../components/login/LoginPage.css'

function LoginPage() {

  return (
    <div className='LoginPage'>
        <div className='row content_row'>
            <div className='col-12 col-lg-6'>
                <Card className='Login_Card'>
                    <Card.Header>
                        <img src={illustration_tape} alt='illustration_tape' className='illustration_tape img-fluid' />
                        <img src={brand_logo_and_text} alt='brand_logo' className='brand_logo'/>
                    </Card.Header>
                    <Card.Body>
                        {/* Only Form Content in Card-Body with change according to Routes(Ex: Login Form,Forgot Password Form, 
                          Sign Up Form etc). But Card-Header(Logo) & Card-Footer(Illustraion) will remain common */}
                        <Routes>
                            <Route path="/" element={<LoginForm/>} />
                            <Route path="/login" element={<LoginForm/>} />
                            <Route path="/login/success" element={<SuccessMsg/>} />
                            <Route path="*" element={<PageNotFound/>} />
                        </Routes>
                    </Card.Body>
                    <Card.Footer>
                        <img src={illustration_openhead} alt='illustration_openhead' className='illustration_openhead img-fluid' />
                    </Card.Footer>
                </Card>
            </div>
        </div>
    </div>
  )
}

export default LoginPage
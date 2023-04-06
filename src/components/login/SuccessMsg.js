import React from 'react';
import {Card} from 'react-bootstrap';
import brand_logo from './../../assets/brand_logo.png';
import illustration_openhead from './../../assets/illustration_openhead.png';
import illustration_tape from './../../assets/illustration_tape.png';

function SuccessMsg() {
  return (
    <Card className='LoginForm SuccessMsg'>
        <Card.Body>
            <img src={illustration_tape} className='illustration_tape img-fluid' alt='illustration_tape'/>
            <img src={brand_logo} alt='brand_logo' className='brand_logo'/>
            <div className='content' style={{'minHeight':'300px'}}>
                Logged-In <br/>Successfully
            </div>
        </Card.Body>
        <Card.Footer>
            <img src={illustration_openhead} className='illustration_openhead img-fluid' alt='illustration_openhead'/>
        </Card.Footer>
    </Card>
  )
}

export default SuccessMsg
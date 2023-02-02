import React from 'react'
import Article from '../components/Loginpage/Article';
import Header from './../components/Homepage/Header/Header';
import LoginForm from './../components/Loginpage/LoginForm';

import './Loginpage.css'

function Loginpage() {
  return (
    <>
        <Header />
        <div className='loginpage__main'>
          <Article />
          <LoginForm />
        </div>
    </>
  )
}

export default Loginpage
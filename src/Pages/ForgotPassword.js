import React from 'react'
import ChangePassword from '../components/ForgotPassword/ChangePassword';
import SendMail from './../components/ForgotPassword/SendMail';
import SentMail from './../components/ForgotPassword/SentMail';

import './ForgotPassword.css'

function ForgotPassword() {
  return (
    <div class='forgot-password-container'>
      {/* <SendMail /> */}
      {/* <SentMail /> */}
      <ChangePassword />
    </div>
  )
}

export default ForgotPassword
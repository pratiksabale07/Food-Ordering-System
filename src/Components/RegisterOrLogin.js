import React, { useState } from 'react'
import { auth } from './FirebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import './css/RegisterOrLogin.css'
import Alert from './Constant Components/Alert'

const RegisterOrLogin = () => {

  const [isLoginForm, setisLoginForm] = useState(true);
  const [alert, setAlert] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (type === 'register') {
      createUserWithEmailAndPassword(auth, email, password).then((data) => {
        navigate('/userProfile');
      }).catch((error) => {
        // console.log(error.message);
        showAlert(error.message, 'danger');
      })
    }
    else {
      signInWithEmailAndPassword(auth, email, password).then((data) => {
        navigate('/userProfile');
      }).catch((error) => {
        // console.log(error.message);
        showAlert(error.message, 'danger');
      })
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
  }

  return (
    <>
      {alert && <Alert message={alert.message} type={alert.type} />}
      <div className='form-signin' style={{ paddingTop: '10pc' }}>
        <form onSubmit={(e) => { handleSubmit(e, isLoginForm ? 'login' : 'register') }}>
          <h1 class="h3 mb-3 fw-normal">Please {isLoginForm ? 'sign in' : 'Register'}</h1>
          {!isLoginForm && <div class="form-floating">
            <input name="name" type="text" class="form-control" id="floatingInput" placeholder="Name" required />
            <label for="floatingInput">Name</label>
          </div>}
          <div class="form-floating">
            <input name="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input name="password" type="password" class="form-control" id="floatingPassword" placeholder="Password" required />
            <label for="floatingPassword">Password</label>
          </div>

          <div class="form-check text-start my-3">
            <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" required />
            <label class="form-check-label" for="flexCheckDefault">
              Remember me
            </label>
          </div>
          <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
          {isLoginForm && <p onClick={() => setisLoginForm(!isLoginForm)} className='mt-3'>New user ? <Link>Create an Account</Link></p>}
          {!isLoginForm && <p onClick={() => setisLoginForm(!isLoginForm)} className='mt-3'>Already Registered ? <Link >Please Sign In</Link></p>}
        </form>
      </div>
    </>
  )
}

export default RegisterOrLogin;

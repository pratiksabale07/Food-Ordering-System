import React, { useState } from 'react'

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const beforeLogin = () => {
    return (
      <div className='form-signin'>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-floating">
            <input name="userName" type="text" className="form-control" id="floatingInput" placeholder="User Name" required />
            <label htmlFor="floatingInput">User Name</label>
          </div>
          <div className="form-floating">
            <input name="password" type="password" className="form-control" id="floatingPassword" placeholder="Password" required />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
        </form>
      </div>
    )
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (e.target.userName.value === 'admin' && e.target.password.value === 'admin') {
      setIsLoggedIn(true)
    }
  }

  return (
    <div style={{ paddingTop: '10pc' }}>
      {isLoggedIn && beforeLogin()}
      {isLoggedIn && <div>LoggedIn</div>}
    </div>
  )

}

export default Admin;

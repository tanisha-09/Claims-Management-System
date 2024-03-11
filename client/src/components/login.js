import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import backgroundImage from '../bg.jpg';
// import axios from 'axios';

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container text-center"> {/* Center the content */}
        <a className="navbar-brand" style={{ fontFamily: 'DejaVu Sans Mono, monospace', color: 'brown', fontSize: '28px', width: '100%' , }}><strong>Tanisha Mehrotra Group</strong></a> </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="footer bg-light fixed-bottom">
      <div className="container text-center">
        <span className="text-muted">© 2024 Claims Management System. All rights reserved.</span>
      </div>
    </footer>
  );
};

const LoginForm = () => {
  const [name, setname] = useState()
  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  // console.log(username,email,password);
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(name, email, password);
  
      try {
          const res = await fetch("http://localhost:5000/api/v3/login/user", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json",
              },
              body: JSON.stringify({
                  name,
                  email,
                  password
              }),
          });
  
          if (!res.ok) {
              throw new Error('Network response was not ok');
          }

          if (email==="admin@gmail.com")
          {
            const data = await res.json();
            console.log(data, "userlogin");
            const { token } = data;
            console.log(token);
            //sessionStorage.setItem('token', token); // Store the token in sessionStorage
            localStorage.setItem('token',token);
            alert("Login successful");
            window.location.href='/admin';
          }
          else if (email==="tpa@gmail.com")
          {
            const data = await res.json();
            console.log(data, "userlogin");
            const { token } = data;
            console.log(token);
            //sessionStorage.setItem('token', token); // Store the token in sessionStorage
            localStorage.setItem('token',token);
            alert("Login successful");
            window.location.href='/tpa';
          }
          else
          {
          const data = await res.json();
          console.log(data, "userlogin");
          const { token } = data;
          console.log(token);
          //sessionStorage.setItem('token', token); // Store the token in sessionStorage
          localStorage.setItem('token',token);
          alert("Login successful");
          window.location.href='/user';
        }
      } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
          alert("login error");
      }
  }
  

  return (
    <>
      <div
        className="container-fluid"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          minHeight: '100vh',
          padding: '20px'
        }}
      >
      <Header />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card style={{ backgroundColor: 'transparent', border: 'none' }}">
              {/* <div className="card-header bg-primary text-white">Login</div> */}
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" name="username" required onChange={(e) => setname(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" required onChange={(e) => setemail(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" required onChange={(e) => setpassword(e.target.value)} />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </div>
    </>
  );
};

export default LoginForm;

import React from 'react';
import backgroundImage from "../image4.jpg";


function ContactUs() {
  return (
    <div
    className="container-fluid"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      minHeight: "100vh",
      padding: "20px",
    }}
  >
    <div className="container">
      <h1 className="mt-5" style={{ color: 'white', fontFamily: 'Arial, sans-serif' }}>Meet the Developer</h1>
      <div className="card my-4">
        <div className="card-body">
          <h2 className="card-title">About Me</h2>
          <p className="card-text">
            Hello, I'm Tanisha Mehrotra, a dedicated developer driven by a passion for coding and crafting innovative solutions.
          </p>
        </div>
      </div>
      <div className="card my-4">
        <div className="card-body">
          <h2 className="card-title">Contact Me</h2>
          <p className="card-text">
            You can reach out to me on the following social media platforms:
          </p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <a href="mailto:tanishamehrotra09@gmail.com" style={{ color: '#007bff', fontFamily: 'Arial, sans-serif' }}>Email</a>
            </li>
            <li className="list-group-item">
              <a href="https://www.linkedin.com/in/tanisha-mehrotra-a98891210/" style={{ color: '#007bff', fontFamily: 'Arial, sans-serif' }}>LinkedIn</a>
            </li>
            <li className="list-group-item">
              <a href="https://github.com/tanisha-09" style={{ color: '#007bff', fontFamily: 'Arial, sans-serif' }}>GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ContactUs;

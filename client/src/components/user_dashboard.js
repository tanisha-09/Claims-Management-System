import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { Card } from "react-bootstrap";
import backgroundImage from "../image4.jpg";

// frontend/src/api.js

const Dashboard = () => {
  const [policies, setPolicies] = useState([]);
  const [claims, setClaims] = useState([]);
  const [name, setname] = useState("");

  useEffect(() => {
    // Get token from localStorage
    const token = localStorage.getItem("token");
    // Decode token to extract userid
    const decodedname = decodeToken(token);
    setname(decodedname);
    // Fetch user policies using decoded userid
    fetchUserPolicies(decodedname);
  }, []);

  useEffect(() => {
    // Get token from localStorage
    const token = localStorage.getItem("token");
    // Decode token to extract userid
    const decodedname = decodeToken(token);
    setname(decodedname);
    // Fetch user policies using decoded userid
    fetchUserClaims(decodedname);
  }, []);

  const decodeToken = (token) => {
    if (!token) return "";
    const tokenParts = token.split(".");
    if (tokenParts.length !== 3) return "";
    const payload = JSON.parse(atob(tokenParts[1]));
    return payload.name;
  };

  const fetchUserPolicies = async (name) => {
    try {
      const response = await fetch(`http://localhost:5000/api/v3/pol/${name}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setPolicies(data);
    } catch (error) {
      console.error("Error fetching policies:", error);
    }
  };

  const fetchUserClaims = async (name) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/v3/claim/${name}`
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setClaims(data);
    } catch (error) {
      console.error("Error fetching claims:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const Footer = () => {
    return (
      <footer className="footer bg-light fixed-bottom">
        <div className="container text-center">
          <span className="text-muted">
            © 2024 Claims Management System. All rights reserved.
          </span>
        </div>
      </footer>
    );
  };

  return (
    <Container fluid>
      <div
        className="container-fluid"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <Row>
          {/* <Container fluid> */}
          <Row className="justify-content-center">
            <Col sm={9} className="text-center bg-white my-4">
              <div className="py-4 px-3">
                <h1>Welcome {name} to Tanisha Mehrotra Group</h1>
              </div>
            </Col>
          </Row>
          {/* </Container> */}

          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#">Home</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/claimform">Apply for Claim</Nav.Link>
                  <Nav.Link href="/contact">Contact Us</Nav.Link>
                  <Nav.Link href="/login" onClick={handleLogout}>
                    LogOut
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Row>

        <Row>
          <Col>
            {/* Content between navbar and table */}
            <div className="my-3">
              {/* <h2>Additional Content</h2> */}
              {/* <p>
                This is some additional content between the navbar and the
                table.
              </p> */}
            </div>
          </Col>
        </Row>

        <Col>
          <div>
            <h2 className="text-white">Policy Details</h2>
            <Row>
              {policies.map((policy, index) => (
                <Col key={policy._id} xs={6} className="mb-3">
                  <Card>
                    <Card.Body>
                      <Card.Title>{policy.pol_name}</Card.Title>
                      <Card.Text>
                        <strong>Policy Id:</strong> {policy.pol_id}
                        <br />
                        <strong>Policy Number:</strong> {policy.policy_no}
                        <br />
                        <strong>Coverage Amount:</strong>{" "}
                        {policy.coverage_amount}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Col>

        <Row>
          <Col sm={12}>
            <h2 className="mt-4 text-white">Claims</h2>

            <Table striped bordered hover className="custom-table">
              <thead>
                <tr>
                  <th>Claimant Name</th>
                  <th>Hospital name</th>
                  <th>Claimant Age</th>
                  <th>Claimant Contact</th>
                  <th>Claimant diagnosis</th>
                  <th>Bill number</th>
                  <th>Bill amount</th>
                  <th>Date admitted</th>
                  <th>Date discharged</th>
                  <th>Treatment received</th>
                  <th>TPA Status</th>
                  <th>Claim Status</th>
                </tr>
              </thead>
              <tbody>
                {claims.map((claim) => (
                  <tr key={claim._id}>
                    <td>{claim.name}</td>
                    <td>{claim.hname}</td>
                    <td>{claim.age}</td>
                    <td>{claim.contact}</td>
                    <td>{claim.diagnosis}</td>
                    <td>{claim.bill_no}</td>
                    <td>{claim.bill_amount}</td>
                    <td>{claim.date_addmission}</td>
                    <td>{claim.date_discharge}</td>
                    <td>{claim.treatment_details}</td>
                    <td>{claim.tpa_status}</td>
                    <td>{claim.status}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Footer />
      </div>
    </Container>
  );
};

export default Dashboard;

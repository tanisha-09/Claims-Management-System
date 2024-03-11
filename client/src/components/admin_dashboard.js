import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import backgroundImage from "../image6.jpg";
import "../App.css";

// frontend/src/api.js

const AdminDashboard = () => {
  const [policies, setPolicies] = useState([]);
  const [claims, setClaims] = useState([]);
  useEffect(() => {
    fetchPolicies();
  }, []);

  useEffect(() => {
    fetchClaims();
  }, []);

  const fetchPolicies = async () => {
    try {
      const response = await fetch(
        "https://claims-management-system-backend.onrender.com/api/v2/getall/policy"
      );
      const data = await response.json();
      setPolicies(data);
    } catch (error) {
      console.error("Error fetching policies:", error);
    }
  };

  const fetchClaims = async () => {
    try {
      const response = await fetch("https://claims-management-system-backend.onrender.com/api/v1/getall/claim");
      const data = await response.json();
      setClaims(data);
    } catch (error) {
      console.error("Error fetching claims:", error);
    }
  };

  const handleApproval = async (claimId) => {
    try {
      const response = await fetch(
        `https://claims-management-system-backend.onrender.com/api/v1/upById/claim/${claimId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: "Approved", // Set the status to 'approved'
          }),
        }
      ).then((data) => {
        console.log(data, "data submitted");
        alert("Claim successfully Approved!");
        window.location.href = "/admin";
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error approving claim:", error);
    }
  };

  const handleRejection = async (claimId) => {
    try {
      const response = await fetch(
        `https://claims-management-system-backend.onrender.com/api/v1/upById/claim/${claimId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: "Rejected", // Set the status to 'approved'
          }),
        }
      ).then((data) => {
        console.log(data, "data submitted");
        alert("Claim Rejected!");
        window.location.href = "/admin";
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error rejecting claim:", error);
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
                <h1>Welcome to Tanisha Mehrotra Group</h1>
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

        <Row>
          <Col>
            <div>
              <h2 className="text-white">Policy Details</h2>

              <Table striped bordered hover responsive>
                <thead className="bg-primary text-white">
                  <tr>
                    <th>Name</th>
                    <th>Policy Id</th>
                    <th>Policy Number</th>
                    <th>Coverage Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {policies.map((policy) => (
                    <tr key={policy._id}>
                      <td>{policy.pol_name}</td>
                      <td>{policy.pol_id}</td>
                      <td>{policy.policy_no}</td>
                      <td>{policy.coverage_amount}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <h2 className="mt-4 text-white">Claims</h2>

            <Table striped bordered hover className="custom-table" bg="primary">
              <thead>
                <tr>
                  <th>Claimant Name</th>
                  <th>Hospital Name</th>
                  <th>Claimant Age</th>
                  <th>Claimant Contact</th>
                  <th>Claimant Diagnosis</th>
                  <th>Bill Number</th>
                  <th>Bill Amount</th>
                  <th>Date Admitted</th>
                  <th>Date Discharged</th>
                  <th>Treatment Received</th>
                  <th>TPA Status</th>
                  <th>Claim Status</th>
                  <th>Claim Approval</th>
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
                    <td>
                      {claim.status === "Pending" ? (
                        <div>
                          <Button
                            variant="success"
                            size="sm"
                            class="col-sm-6"
                            onClick={() => handleApproval(claim._id)}
                          >
                            Approve
                          </Button>
                          <Button
                            variant="danger"
                            size="sm"
                            class="col-sm-6"
                            onClick={() => handleRejection(claim._id)}
                          >
                            Reject
                          </Button>
                        </div>
                      ) : (
                        <div>
                          {claim.status === "Approved" ? (
                            <span className="text-success">Approved</span>
                          ) : (
                            <span className="text-danger">Rejected</span>
                          )}
                        </div>
                      )}
                    </td>
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

export default AdminDashboard;

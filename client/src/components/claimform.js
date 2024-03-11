import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import backgroundImage from "../image6.jpg";

const ClaimForm = () => {
  const [name, setName] = useState("");
  const [hname, setHName] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [billNo, setBillNo] = useState("");
  const [billAmount, setBillAmount] = useState("");
  const [dateAdmission, setDateAdmission] = useState("");
  const [dateDischarge, setDateDischarge] = useState("");
  const [treatmentDetails, setTreatmentDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/api/v1/post/claim", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        hname,
        age,
        contact,
        diagnosis,
        bill_no: billNo,
        bill_amount: billAmount,
        date_admission: dateAdmission,
        date_discharge: dateDischarge,
        treatment_details: treatmentDetails,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data, "formsubmit");
        alert("Form Submission Successful");
        window.location.href = "/user";
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        alert("Invalid User Credentials");
      });

    const formData = {
      name,
      hname,
      age,
      contact,
      diagnosis,
      bill_no: billNo,
      bill_amount: billAmount,
      date_admission: dateAdmission,
      date_discharge: dateDischarge,
      treatment_details: treatmentDetails,
    };
    console.log("Form Data:", formData);
    // Add your form submission logic here
  };

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
      <Container className="mt-5">
        <h2 className="mt-4 text-white">Claim Form</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label className="mt-4 text-white">
            Name<span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              onInvalid={() => {
                alert("Please enter your number.");
              }}
            />
          </Form.Group>

          <Form.Group controlId="formHName">
            <Form.Label className="mt-4 text-white">
              Hospital Name<span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter hospital name"
              required
              value={hname}
              onChange={(e) => setHName(e.target.value)}
              onInvalid={() => {
                alert("Please enter hospital name.");
              }}
            />
          </Form.Group>

          <Form.Group controlId="formAge">
            <Form.Label className="mt-4 text-white">
              Age<span className="text-danger">*</span>
              </Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter age"
              required
              value={age}
              onChange={(e) => setAge(e.target.value)}
              onInvalid={() => {
                alert("Please enter your age.");
              }}
            />
          </Form.Group>

          <Form.Group controlId="formContact">
            <Form.Label className="mt-4 text-white">
              Contact<span className="text-danger">*</span>
              </Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter contact"
              required
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              onInvalid={() => {
                alert("Please enter your contact number.");
              }}
            />
          </Form.Group>

          <Form.Group controlId="formDiagnosis">
            <Form.Label className="mt-4 text-white">
              Diagnosis<span className="text-danger">*</span>
              </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter diagnosis"
              required
              value={diagnosis}
              onChange={(e) => setDiagnosis(e.target.value)}
              onInvalid={() => {
                alert("Please enter the diagnosis.");
              }}
            />
          </Form.Group>

          <Form.Group controlId="formBillNo">
            <Form.Label className="mt-4 text-white">
              Bill Number<span className="text-danger">*</span>
              </Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter bill number"
              required
              value={billNo}
              onChange={(e) => setBillNo(e.target.value)}
              onInvalid={() => {
                alert("Please enter a bill number.");
              }}
            />
          </Form.Group>

          <Form.Group controlId="formBillAmount">
            <Form.Label className="mt-4 text-white">
              Bill Amount<span className="text-danger">*</span>
              </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter bill amount"
              required
              value={billAmount}
              onChange={(e) => setBillAmount(e.target.value)}
              onInvalid={() => {
                alert("Please enter a bill amount.");
              }}
            />
          </Form.Group>

          <Form.Group controlId="formDateAdmission">
            <Form.Label className="mt-4 text-white">
              Date of Admission<span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="date"
              value={dateAdmission}
              required
              onChange={(e) => setDateAdmission(e.target.value)}
              onInvalid={() => {
                alert("Please enter date of admission.");
              }}
            />
          </Form.Group>

          <Form.Group controlId="formDateDischarge">
            <Form.Label className="mt-4 text-white">
              Date of Discharge<span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="date"
              value={dateDischarge}
              required
              onChange={(e) => setDateDischarge(e.target.value)}
              onInvalid={() => {
                alert("Please enter date of discharge.");
              }}
            />
          </Form.Group>

          <Form.Group controlId="formTreatmentDetails">
            <Form.Label className="mt-4 text-white">
              Treatment Details
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter Treatment Details"
              value={treatmentDetails}
              required
              onChange={(e) => setTreatmentDetails(e.target.value)}
            />
          </Form.Group>
          <div className="text-center">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default ClaimForm;

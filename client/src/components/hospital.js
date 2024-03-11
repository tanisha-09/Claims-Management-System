import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from "../image4.jpg";


const TreatmentTable = () => {
    const treatments = [
        { treatment: 'Physical Therapy', charge: 'Rs 10000' },
        { treatment: 'X-Ray', charge: 'Rs 1500' },
        { treatment: 'MRI Scan', charge: 'Rs 3000' },
        { treatment: 'Blood Test', charge: 'Rs 500' },
        { treatment: 'Massage Therapy', charge: 'Rs 1000' },
        { treatment: 'Acupuncture', charge: 'Rs 900' },
        { treatment: 'Dental Cleaning', charge: 'Rs 1500' },
        { treatment: 'Eye Exam', charge: 'Rs 500' },
        { treatment: 'Prenatal Care Visit', charge: 'Rs 2000' },
        { treatment: 'Psychological Counseling', charge: 'Rs 1200' },
        { treatment: 'Nutritional Counseling', charge: 'Rs 800' },
        { treatment: 'Occupational Therapy', charge: 'Rs 1100' },
        { treatment: 'Speech Therapy', charge: 'Rs 1000' }
    ];

    const Footer = () => {
        return (
          <footer className="footer bg-light fixed-bottom">
            <div className="container text-center">
              <span className="text-muted">© 2024 Claims Management System. All rights reserved.</span>
            </div>
          </footer>
        );
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
        <div className="container mt-4">
            <h1 className="mt-4 text-white">Hospital Treatment Details</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Treatment</th>
                        <th>Charges</th>
                    </tr>
                </thead>
                <tbody>
                    {treatments.map((item, index) => (
                        <tr key={index}>
                            <td>{item.treatment}</td>
                            <td>{item.charge}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <Footer />
        </div>
    );
};

export default TreatmentTable;

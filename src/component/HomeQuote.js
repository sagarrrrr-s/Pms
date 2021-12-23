import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
class HomeQuote extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3 ml-5 mr-5 mb-1 mx-1">
            <Card bg="primary" text="white" style={{ width: '100%', height: "400px" }}>
              <Card.Header>New Section Added</Card.Header>
              <Card.Body>
                <Card.Title>Inauguration of New Section</Card.Title>
                <Card.Text className="text-white">
                  A section with amenities including a new Research and Development Cell, an Operation Theater, and a Check-Up Center.
                </Card.Text>
                <br />
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3 ml-3 mr-3 mx-1">
            <Card bg="success" text="white" style={{ width: '100%', height: "400px" }}>
              <Card.Header>Awards</Card.Header>
              <Card.Body>
                <Card.Title>Nominated for specialization in Oncology</Card.Title>
                <Card.Text>
                  We are blown away by the generosity of our patients and employees.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3 ml-3 mr-2 mx-1">
            <Card bg="warning" text="white" style={{ width: '100%', height: "400px" }}>
              <Card.Header>RnD Update</Card.Header>
              <Card.Body>
                <Card.Title>Medicinal Contribution</Card.Title>
                <Card.Text>
                  Dr. S. K. discovered a novel treatment for skin bacteria.
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeQuote;
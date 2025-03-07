import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../assets/CSS/Footer.css";
import madeinIndia from "../assets/IndiaFlag.png";

const FooterComponent = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row>
          {/* Left Side: Logo, Contact Info, and Social Media */}
          <Col md={4} className="mb-4 mr-3">
            <h4>ViVi Renewables</h4>
            <p>
              Rooftop solar made simple. We don't just sell solar — we give you
              peace of mind.
            </p>
            <p>
              <strong>Contact Us:</strong>
              <br />
              Phone:{" "}
              <a href="tel:+917040010890" className="text-light">
                70 4001 0890
              </a>
              <br />
              Email:{" "}
              <a
                href="mailto:contact@vivirenewables.com"
                className="text-light"
              >
                contact@vivirenewables.com
              </a>
            </p>
          </Col>

          {/* Middle Side: Solutions */}
          <Col md={2} className="mb-4 mr-3">
            <h5>Our Solutions</h5>
            <ListGroup>
              <ListGroup.Item className="bg-dark text-light border-0 p-1">
                Homes
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-light border-0 p-1">
                Commercial
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-light border-0 p-1">
                Housing Society
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Right Side: Quick Links */}
          <Col md={2} className="mb-4 mr-5">
            <h5>Quick Links</h5>
            <ListGroup>
              <ListGroup.Item className="bg-dark text-light border-0 p-1">
                <a href="/" className="text-light">
                  About Us
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-light border-0 p-1">
                <a href="/" className="text-light">
                  SolarPro Partner
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-light border-0 p-1">
                <a href="/" className="text-light">
                  Sitemap
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-light border-0 p-1">
                <a href="/" className="text-light">
                  Careers
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Address Section */}
          <Col md={4} className="mb-4">
            <h5>Address</h5>
            <p>Yugandhar Appartment,</p>
            <p>Pathare wasti,</p>
            <p>Lohegaon, Pune, Maharashtra 400058</p>
          </Col>
        </Row>

        <hr className="text-light" />

        <Row className="text-center">
          <Col className="d-flex justify-content-start">
            {/* <p>
              Proudly made in India{' '}
              <img src={madeinIndia} alt="India Flag" style={{ width: '30px', verticalAlign: 'middle' }} />
            </p> */}

            <div className="social-icons">
              <a
                href="https://facebook.com/"
                className="mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://youtube.com/"
                className="mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
              <a
                href="https://instagram.com/"
                className="mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com/"
                className="mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </Col>
          <Col className="d-flex justify-content-end">
            <p>
              &copy;{new Date().getFullYear()} ViVi Renewables.{" "}
              <img
                src={madeinIndia}
                alt="India Flag"
                style={{ width: "30px", verticalAlign: "middle" }}
              />{" "}
              All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;

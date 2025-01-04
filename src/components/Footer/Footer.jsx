import React from 'react'
import './footer.css'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'

import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png';

const quick__links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/tours',
    display: 'Tours'
  },
];

const quick__links2 = [
  {
    path: '/gallery',
    display: 'Gallery'
  },
  {
    path: '/login',
    display: 'Login'
  },
  {
    path: '/register',
    display: 'Register'
  },
];

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    /*
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='3'>
            <div className="logo">
              <img src={logo} alt="Logo" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Possimus, necessitatibus.</p>
            </div>
            <div className="social__links d-flex align-items-center gap-4">
              <span>
                <Link to='#'><i className="ri-youtube-line"></i></Link>
              </span>
              <span>
                <Link to='#'><i className="ri-github-fill"></i></Link>
              </span>
              <span>
                <Link to='#'><i className="ri-facebook-circle-line"></i></Link>
              </span>
              <span>
                <Link to='#'><i className="ri-instagram-line"></i></Link>
              </span>
            </div>
          </Col>
          <Col lg='3'>
            <h5 className="footer__link-title">Discover</h5>

            <ListGroup className='footer__quick-links'>
              {
                quick__links.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>

          </Col>
          <Col lg='3'>
            <h5 className="footer__link-title">Quick Links</h5>

            <ListGroup className='footer__quick-links'>
              {
                quick__links2.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className="footer__link-title">Contact</h5>

            <ListGroup className='footer__quick-links'>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span><i className="ri-map-pin-line"></i></span>
                  Address:
                </h6>
                <p className='mb-0'>Sylhet, Bangladesh</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span><i className="ri-mail-line"></i></span>
                  Email:
                </h6>
                <p className='mb-0'>email01@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span><i className="ri-phone-fill"></i></span>
                  Phone:
                </h6>
                <p className='mb-0'>+0123456789</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='12' className='text-center pt-5'>
            <p className='copyright'>
              Copyright {year}, design and develop by </p>
          </Col>
        </Row>
      </Container>
    </footer>
    */
    <footer class="footer">
      <div class="container">
        <div class="logo">
          <img src={logo} alt="Logo" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, necessitatibus.</p>
          <div class="social__links">
            <span><Link to="#"><i className="ri-youtube-line"></i></Link></span>
            <span><Link to="#"><i className="ri-github-fill"></i></Link></span>
            <span><Link to="#"><i className="ri-facebook-circle-line"></i></Link></span>
            <span><Link to="#"><i className="ri-instagram-line"></i></Link></span>
          </div>
        </div>
        <div class="discover">
          <h5 class="footer__link-title">Discover</h5>
          <ul class="footer__quick-links">
            {quick__links.map((item, index) => (
              <li key={index}><Link to={item.path}>{item.display}</Link></li>
            ))}
          </ul>
        </div>
        <div class="quick-links">
          <h5 class="footer__link-title">Quick Links</h5>
          <ul class="footer__quick-links">
            {quick__links2.map((item, index) => (
              <li key={index}><Link to={item.path}>{item.display}</Link></li>
            ))}
          </ul>
        </div>
        <div class="contact-section">
          <h5 class="footer__link-title">Contact</h5>
          <ul class="footer__quick-links">
            <li><p><i className="ri-map-pin-line"></i> Sylhet, Bangladesh</p></li>
            <li><p><i className="ri-mail-line"></i> email01@gmail.com</p></li>
            <li><p><i className="ri-phone-fill"></i> +0123456789</p></li>
          </ul>
        </div>
      </div>
      <div class="copyright">
        Copyright {year}, design and develop by
      </div>
    </footer>

  )
}

export default Footer;
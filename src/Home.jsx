import React from 'react'
import { Navbar, Container, Nav, NavLink, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import imglogo from "./images/logo.svg"
import imginteractive1 from "./images/desktop/image-interactive.jpg"
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import imgBg from "./images/desktop/imgbg.jpg"
import { Parallax } from 'react-parallax';
import AOS from "aos";
import "aos/dist/aos";


function Home() {
    AOS.init();

    return (
        <>
            <Parallax strength={800} speed={10} bgImage={imgBg} >
                <header >
                    <Navbar className='navbar' expand="lg" variant="dark" id='header'>
                        <Container>
                            <Navbar.Brand href="#home" className="brand"><img src={imglogo} alt="" /></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto ">
                                    <NavLink href='#interactive' exact to="/About" key="about" activeclassName="active"><div className='list-item'>About</div></NavLink>
                                    <NavLink href='#pages' exact to="/careers" key="about" activeclassName="active"><div className='list-item'>Careers</div></NavLink>
                                    <NavLink href='#pages' exact to="/events" key="about" activeclassName="active"><div className='list-item'>Events</div></NavLink>
                                    <NavLink href='#pages' exact to="/products" key="about" activeclassName="active"><div className='list-item'>Products</div></NavLink>
                                    <NavLink href='#footer' exact to="/support" key="about" activeclassName="active"><div className='list-item'>Support</div></NavLink>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                    <Container className='header' data-aos="zoom-in" data-aos-duration="1500">
                        <div className='header-contact'>
                            <h1>IMMERSİVE EXPERİENCES THAT DELİVER</h1>
                        </div>
                    </Container>
                </header>
            </Parallax>

            <Container className='interactive' id='interactive'>
                <Row className='interactive-row' >
                    <Col className='interactive-left p-0' ><img src={imginteractive1} alt="interactiveimg" /></Col>
                    <Col className='interactive-right text-light p-0' ><div className='div-1 '><div className='div-2'><h4 data-aos="zoom-in" data-aos-duration="1500">THE LEADER IN INTERACTIVE VR</h4><p>Founded in 2011, Loopstudios has been producing world-class virtual reality
                        projects for some of the best companies around the globe. Our award-winning
                        creations have transformed businesses through digital experiences that bind
                        to their brand.</p></div></div></Col>
                </Row>
            </Container>
            <Container className='pages' id='pages'>
                <div className='d-flex justify-content-between '>
                    <h1 data-aos="zoom-in" data-aos-duration="1500">OUR CREATIONS</h1>
                    <button className='btn'>SEE ALL</button>
                </div>
                <Row className='pages-row ' >
                    <Col lg={3} md={12} className='pages-col pages-1' data-aos="zoom-in" data-aos-duration="500"><h2>Deep earth</h2></Col>
                    <Col lg={3} md={12} className='pages-col pages-2' data-aos="zoom-in" data-aos-duration="800"><h2>Night arcade</h2></Col>
                    <Col lg={3} md={12} className='pages-col pages-3' data-aos="zoom-in" data-aos-duration="1100"><h2>Soccer team VR</h2></Col>
                    <Col lg={3} md={12} className='pages-col pages-4' data-aos="zoom-in" data-aos-duration="1400"><h2>The grid</h2></Col>
                    <Col lg={3} md={12} className='pages-col pages-5' data-aos="zoom-in" data-aos-duration="500"><h2>From up above VR</h2></Col>
                    <Col lg={3} md={12} className='pages-col pages-6' data-aos="zoom-in" data-aos-duration="800"><h2>Pocket borealis</h2></Col>
                    <Col lg={3} md={12} className='pages-col pages-7' data-aos="zoom-in" data-aos-duration="1100"><h2>The curiosity</h2></Col>
                    <Col lg={3} md={12} className='pages-col pages-8' data-aos="zoom-in" data-aos-duration="1400"><h2>Make it fisheye</h2></Col>
                </Row>

            </Container>
            <Container fluid className="footer" id='footer'>
                <Container className='footer-2'>
                    <div>
                        <div className='logo-icon'>
                            <a href="#header">
                                <img src={imglogo} alt="" />
                            </a>
                            <div className='icons  '>
                                <AiFillFacebook className='icon' />
                                <AiFillInstagram className='icon' />
                                <AiFillLinkedin className='icon' />
                                <BsPinterest className='icon' />
                            </div>
                        </div>

                        <Navbar className='navbar mt-4' expand="lg"   >

                            <Nav className="me-auto nav ">
                                <NavLink href='#interactive' exact to="/About" key="about" activeclassName="active"><div className='list-item'>About</div></NavLink>
                                <NavLink href='#pages' exact to="/careers" key="about" activeclassName="active"><div className='list-item'>Careers</div></NavLink>
                                <NavLink href='#pages' exact to="/events" key="about" activeclassName="active"><div className='list-item'>Events</div></NavLink>
                                <NavLink href='#pages' exact to="/products" key="about" activeclassName="active"><div className='list-item'>Products</div></NavLink>
                                <NavLink href='#footer' exact to="/support" key="about" activeclassName="active"><div className='list-item'>Support</div></NavLink>
                            </Nav>

                        </Navbar></div>
                </Container>
            </Container>


        </>
    )
}

export default Home

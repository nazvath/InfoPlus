import React, { useState } from 'react';
import './Home.css';
import Button from 'react-bootstrap/Button'; // Import Bootstrap Button
import Form from 'react-bootstrap/Form';     // Import Bootstrap Form
import Modal from 'react-bootstrap/Modal';   // Import Bootstrap Modal

function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
<div>    <div className='Container1'>
      <header className='header'>
        <h1>Welcome to <span style={{ color: 'yellow', fontFamily:'fantasy' }}>InfoPlus</span></h1>
        <p className='para1'>Your go-to hub for real-time data and insights.</p>
       
        <Button className='button1' variant="primary" onClick={handleShow}>
          Get Started
        </Button>
      </header>
     
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
         
          <Button variant="primary" onClick={handleClose}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
      <section className='whyInfoPlus'>
        <h2>Why InfoPlus?</h2>
        <p>
          InfoPlus is an intuitive platform designed to give users quick access to real-time data and insights. 
          Whether you're looking to explore user information, check out the latest updates, or learn more about the platform, 
          InfoPlus offers an easy-to-navigate interface and useful features.
<ul className='points'>
        <li className='list'>  Real-time Data: InfoPlus uses live data fetching to bring users the most up-to-date information. The app showcases a list of users fetched from an external API.</li>
<li className='list'>Interactive Interface: The homepage presents an interactive experience with features like a login modal, enhancing user engagement.</li>
<li className='list'>Modern Design: Built using React.js and styled with modern CSS techniques, the app is designed to be fully responsive and visually appealing across devices. I used Bootstrap to enhance the design and ensure consistency.</li>
</ul>

<p>Ideal for users looking for quick data access with a clean and simple interface!</p>
        </p>
      </section>
    </div>

  );
}

export default Home;

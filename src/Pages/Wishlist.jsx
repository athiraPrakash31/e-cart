import React from 'react'
import {
    MDBIcon,
} from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Wishlist() {
  return (
    <div className='d-flex'>
        <div className=" row m-4 ">

         <Card style={{ width: '20rem' }}>
      <Card.Img  height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY2uDj30-WzLD6XvsQ6aq2hxhn2YCb5shaqAmc6l01YA&s" />
      <Card.Body>
        <Card.Title>iPhone</Card.Title>
        <Card.Text>
         Price:$549
        </Card.Text>
        <div className="d-flex justify-content-evenly">
        <Button variant="secondary"><MDBIcon fas icon="trash" color='danger' /></Button>
        <Button variant="secondary"><MDBIcon fas icon="shopping-cart" color='success' /></Button>
        </div>
      </Card.Body>
    </Card>
        </div>
        <div className=" row m-4 ">

         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'200px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY2uDj30-WzLD6XvsQ6aq2hxhn2YCb5shaqAmc6l01YA&s" />
      <Card.Body>
        <Card.Title>iPhone</Card.Title>
        <Card.Text>
         Price:$549
        </Card.Text>
        <div className="d-flex justify-content-evenly">
        <Button variant="secondary"><MDBIcon fas icon="trash" color='danger' /></Button>
        <Button variant="secondary"><MDBIcon fas icon="shopping-cart" color='success' /></Button>
        </div>
      </Card.Body>
    </Card>
        </div>
    </div>
  )
}

export default Wishlist
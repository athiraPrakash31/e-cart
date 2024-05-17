import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Cart() {
    return (
        <div className='d-flex m-5'>
            <Row className='d-flex'>
<Col>

            <Table striped bordered hover size="sm" className='m-4'>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
</Col>
<Col>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Cart Summary</Card.Title>
        <Card.Text>
        <p>Total Cart Item : 3</p>
        <p>Total Price : 348</p>

        </Card.Text>
        <Button variant="secondary">Checkout</Button>
      </Card.Body>
    </Card>
</Col>
            </Row>
            
        </div>
    )
}

export default Cart
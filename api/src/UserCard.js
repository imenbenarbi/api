import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function UserCard({ el }) {
  return (
    <div style={{ margin: '20px', display: 'flex', justifyContent: 'center' }}>    
      <Card border="primary" style={{ width: '25rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
        <Card.Header style={{ backgroundColor: '#1a47c2', color: 'white' }}> {el.name} </Card.Header>

          <ListGroup variant="flush">

            <ListGroup.Item>  <strong>Email:</strong> {el.email}  </ListGroup.Item>
            <ListGroup.Item>  <strong>Username:</strong> {el.username}  </ListGroup.Item>
            <ListGroup.Item>  <strong>City:</strong> {el.address.city}  </ListGroup.Item>
            <ListGroup.Item>  <strong>Phone:</strong> {el.phone}  </ListGroup.Item>
            <ListGroup.Item>  <strong>Website:</strong> {el.website}  </ListGroup.Item>
            <ListGroup.Item>  <strong>Company Name:</strong> {el.company.name}  </ListGroup.Item>

        </ListGroup>

      </Card>
    </div>
  );
}

export default UserCard;
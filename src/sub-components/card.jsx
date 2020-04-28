import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import bg1 from '../assets/bg1.jpg';
  
  
  const CardItem = (props) => {
    return (
        <Card>
          <CardImg top width="100%" 
            src={bg1} 
            alt="Card image cap"
            className="p-3" 
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
    );
  };
  
  export default CardItem;
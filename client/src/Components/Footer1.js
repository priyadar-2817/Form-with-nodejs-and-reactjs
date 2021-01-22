import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Footer1 = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Hello, Admin!</h1>
        <p className="lead">Add the details and click on Submit to register the user as 'Approved'</p>
        
      </Jumbotron>
    </div>
  );
};

export default Footer1;
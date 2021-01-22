import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import Footer1 from './Components/Footer1';
import { Spinner } from 'reactstrap';
import { Alert } from 'reactstrap';


class App extends Component{
  constructor(){
    super()
    this.state ={
      firstname: '',
      lastName:'',
      email:'',
     
      password:'',
      selectFund:[],
      selectBranch:[],
      selectInvestor:[],
      selectDistributor:[]
  
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange = e =>{
    this.setState({ [e.target.name]: e.target.value})
  }
  async handleSubmit(e){
    e.preventDefault()

    const {firstname,lastName, email, password,selectFund,selectBranch, selectInvestor, selectDistributor} = this.state
    const form = await axios.post('api/form', {
      firstname,
      lastName,
      email,
     
      password,
      selectFund,
      selectBranch,
      selectInvestor,
      selectDistributor
    })
    
  }

  render(){
    return(
      
      <Form onSubmit={this.handleSubmit} >
        <div>
      <Spinner type="grow" color="primary" />
      
      <Spinner type="grow" color="danger" />
      
      
      
    </div>
       
        <div class="d-flex justify-content-center"> 
        
        <Row>
          <Col>
          <FormGroup>
          <Label for="firstname">Enter the first name</Label>
          <Input
            type="text"
            name="firstname"
            onChange={this.handleChange} />
        </FormGroup>
          </Col>
       
        <Col>
          
        <FormGroup>
          <Label for="lastName">Enter the last name</Label>
          <Input
            type="text"
            name="lastName"
            onChange={this.handleChange} />
        </FormGroup>
        
        </Col>
      
        
       

        
        </Row>
        
       
       
        
        
        </div>
       

       
        <div class="d-flex justify-content-center">
          
        <Row >
        <Col>
        <FormGroup>
          <Label for="email">Enter the email</Label>
          <Input
            type="email"
            name="email"
            onChange={this.handleChange} />
        </FormGroup>
        </Col>

        <Col>
        <FormGroup>
          <Label for="password">Enter the password</Label>
          <Input
            type="password"
            name="password"
            onChange={this.handleChange} />
        </FormGroup>
        </Col>
        </Row>
         </div>

         <div class="d-flex justify-content-center">

         <Row>
          <Col>
          <FormGroup>
        <Label for="selectFund">Select Fund</Label>
        <Input type="select" name="selectFund" id="selectFund" onChange={this.handleChange}>
          <option>AXIS</option>
          <option>MIRAE</option>
          <option>INVESCO</option>
         
        </Input>
      </FormGroup>
          </Col>
           <Col>
           <FormGroup>
        <Label for="selectBranch">Select Branch</Label>
        <Input type="select" name="selectBranch" id="selectBranch" onChange={this.handleChange}>
          <option>BR1</option>
          <option>BR2</option>
          <option>BR3</option>
         
        </Input>
      </FormGroup>
           </Col>
     
        </Row>

         </div>

        
         <div class="d-flex justify-content-center">

         <Row>
      <Col>
       
       <FormGroup>
         <Label for="selectInvestor">Select Invsetor</Label>
         <Input type="select" name="selectInvestor" id="selectInvestor" onChange={this.handleChange}>
           <option>RETAIL</option>
           <option>CORPORATE</option>
           <option>HNI</option>
          
         </Input>
       </FormGroup>
      </Col>
       <Col>
       <FormGroup>
         <Label for="selectDistributor">Select Distributor</Label>
         <Input type="select" name="selectDistributor" id="selectDistributor" onChange={this.handleChange}>
           <option>IFA</option>
           <option>ND/RO</option>
           <option>BANK</option>
           <option>DIRECT</option>
 
          
         </Input>
       </FormGroup>
       
       </Col>

      </Row>

         </div>
         
     
         <div class="d-flex justify-content-center">
         <Button color="primary" size="lg" >Submit</Button>{' '}

         </div>
         <Footer1/>
      </Form>
      
    );
  }
}
export default App;

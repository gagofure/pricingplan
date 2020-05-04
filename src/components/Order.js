import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import history from './history'


class Order extends Component {

  state = {
    firstName: "",
    lastName: "",
    password: "",
    email: ""
  }


  handleSubmit = (e) => {
    e.preventDefault()
    this.props.userInfo(this.state)
    this.setState({
      firstName: '',
      lastName: '',
      password: '',
      email: ''
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

 

  render() {

    return (
      <section className="signup">
        <div className="row container">
          <div><Link to="/"> Back To Pricing Plan </Link></div>
          <form onSubmit={this.handleSubmit} className="s12">
            <div className="row">
              <div className="input-field col s6">
                <label>First Name</label>
                <input type="text" id="firstName" className="validate" onChange={this.handleChange} value={this.state.firstName} />
              </div>
              <div className="input-field col s6">
                <label >Last Name</label>
                <input type="text" id="lastName" className="validate" onChange={this.handleChange} value={this.state.lastName} />

              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="password" type="password" value={this.state.password} onChange={this.handleChange} className="validate" />
                <label >Password</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate" onChange={this.handleChange} value={this.state.email} />
                <label >Email</label>
                <span className="helper-text" data-error="wrong" data-success="right">name@example.com</span>
              </div>
            </div>
            <button className=" btn button" onClick={() => history.push('/OrderConfirmation')}>Submit</button>
          </form>
        </div>
      </section>

    );
  }
}

export default Order;



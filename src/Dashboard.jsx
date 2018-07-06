import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: '',
      animal: 'Dog',
    };
    this.handleZipcode = this.handleZipcode.bind(this);
    this.handleAnimal = this.handleAnimal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleZipcode(event) {
    this.setState({ zipcode: event.target.value });
  }

  handleAnimal(event) {
    this.setState({ animal: event.target.value });
  }

  handleSubmit(event) {
    const { zipcode, animal } = this.state;
    console.log(`${zipcode} ${animal}`);
    event.preventDefault();
  }

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="Zip Code" type="number" value={value} onChange={this.handleZipcode} />
        <br />
        <br />
        Pick an animal:
        <br />
        <select value={value} onChange={this.handleAnimal}>
          <option value="dog">
            Dog
          </option>
          <option value="cat">
            Cat
          </option>
          <option value="bird">
            Bird
          </option>
          <option value="reptile">
            Reptile
          </option>
          <option value="horse">
            Horse
          </option>
          <option value="barnyard">
            Barnyard
          </option>
          <option value="smallfurry">
            Smallfurry
          </option>
        </select>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Dashboard;
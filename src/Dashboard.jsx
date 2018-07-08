import React, { Component } from 'react';

import ListAnimals from './ListAnimals';
import typeOfAnimal from './data/typeOfAnimal';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: '',
      animal: 'dog',
      animals: [],
      breedList: [],
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

    fetch(`/petbasicfind/${animal}/${zipcode}`)
      .then(res => res.json())
      .then(data => this.setState({ animals: data.petfinder.pets.pet }));

    fetch(`/breedlist/${animal}`)
      .then(res => res.json())
      .then(data => this.setState({ breedList: data.petfinder.breeds.breed }));

    event.preventDefault();
  }

  render() {
    const { value, animals, breedList } = this.state;
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input placeholder="Zip Code" type="number" value={value} onChange={this.handleZipcode} />
            Pick an animal:
            <select value={value} onChange={this.handleAnimal}>
              {typeOfAnimal.map(x => (
                <option value={x.value}>
                  {x.option}
                </option>
              ))}
            </select>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div>
          Pick a breed:
          <select>
            {breedList.map(x => (
              <option value={x.$t}>
                {x.$t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <ListAnimals listOfAnimals={animals} />
        </div>
      </div>
    );
  }
}

export default Dashboard;

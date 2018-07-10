import React, { Component } from 'react';

import ListAnimals from './ListAnimals';
import SingleAnimal from './SingleAnimal';
import { typeOfAnimal, animalAge, animalSize } from './data/dropdownOptions';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: '',
      animal: 'dog',
      animals: [],
      breedList: [],
      breed: '',
      gender: 'M',
      age: 'Baby',
      size: 'S',
      currentAnimal: [],
      offset: 0,
      menuTwo: false,
    };
    this.handleZipcode = this.handleZipcode.bind(this);
    this.handleAnimal = this.handleAnimal.bind(this);
    this.handleSubmitBasic = this.handleSubmitBasic.bind(this);
    this.handleSubmitFull = this.handleSubmitFull.bind(this);
    this.handleBreed = this.handleBreed.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleSize = this.handleSize.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleAnimalClick = this.handleAnimalClick.bind(this);
    this.fetchBreed = this.fetchBreed.bind(this);
  }

  handleZipcode(e) {
    this.setState({ zipcode: e.target.value });
  }

  handleAnimal(e) {
    this.setState({ animal: e.target.value });
  }

  handleBreed(e) {
    this.setState({ breed: e.target.value });
  }

  handleGender(e) {
    this.setState({ gender: e.target.value });
  }

  handleSize(e) {
    this.setState({ size: e.target.value });
  }

  handleAge(e) {
    this.setState({ age: e.target.value });
  }

  handleAnimalClick(id) {
    const { animals } = this.state;

    this.setState({ currentAnimal: animals.filter(x => x.id.$t === id) });
  }

  handleSubmitBasic(e) {
    const { zipcode, animal, offset } = this.state;

    fetch(`/petbasicfind/${animal}/${zipcode}/${offset}`)
      .then(res => res.json())
      .then(data => this.setState({
        animals: data.petfinder.pets.pet,
        menuTwo: true,
      }, this.fetchBreed()))
      .catch(() => alert('Please enter a Valid Zip Code'));

    e.preventDefault();
  }

  fetchBreed() {
    const { animal } = this.state;

    fetch(`/breedlist/${animal}`)
      .then(res => res.json())
      .then(data => this.setState({
        breedList: data.petfinder.breeds.breed,
        breed: data.petfinder.breeds.breed[0].$t,
      }));
  }

  handleSubmitFull(e) {
    const {
      zipcode,
      animal,
      breed,
      age,
      gender,
      size,
      offset,
    } = this.state;

    fetch(`/petfullfind/${animal}/${zipcode}/${breed}/${gender}/${age}/${size}/${offset}`)
      .then(res => res.json())
      .then(data => this.setState({ animals: data.petfinder.pets.pet }));

    e.preventDefault();
  }

  render() {
    const {
      value,
      animals,
      breedList,
      currentAnimal,
      menuTwo,
    } = this.state;

    return (
      <div>
        {/* first form */}
        <div>
          <form onSubmit={this.handleSubmitBasic}>
            Pick a zipcode:
            <input
              placeholder="Zip Code"
              type="number"
              value={value}
              onChange={this.handleZipcode}
              required
            />
            Pick an animal:
            <select value={value} onChange={this.handleAnimal}>
              {typeOfAnimal.map(x => (
                <option value={x.value} key={x.id}>
                  {x.option}
                </option>
              ))}
            </select>
            {menuTwo ? null : <input type="submit" value="Submit" />}
          </form>
        </div>
        {/* Second form */}
        <div>
          {!menuTwo ? null
            : (
              <form onSubmit={this.handleSubmitFull}>
              Pick a breed:
                <select value={value} onChange={this.handleBreed}>
                  {breedList.map(x => (
                    <option value={x.$t} key={x.$t}>
                      {x.$t}
                    </option>
                  ))}
                </select>
                Pick a gender:
                <select value={value} onChange={this.handleGender}>
                  <option value="M">
                    Male
                  </option>
                  <option value="F">
                    Female
                  </option>
                </select>
                Pick an age:
                <select value={value} onChange={this.handleAge}>
                  {animalAge.map(x => (
                    <option value={x.value} key={x.id}>
                      {x.option}
                    </option>
                  ))}
                </select>
                Pick a size:
                <select value={value} onChange={this.handleSize}>
                  {animalSize.map(x => (
                    <option value={x.value} key={x.id}>
                      {x.option}
                    </option>
                  ))}
                </select>
                <input type="submit" value="Submit" />
              </form>
            )}
        </div>

        <div>
          {animals === undefined ? 'No Result'
            : (
              <ListAnimals
                listOfAnimals={animals}
                animalClickHandler={this.handleAnimalClick}
              />
            )}
        </div>

        <div>
          {currentAnimal.length === 0 ? null : <SingleAnimal singleAnimalDisplay={currentAnimal} />}
        </div>

      </div>
    );
  }
}

export default Dashboard;

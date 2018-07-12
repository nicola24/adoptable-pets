import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

import ListAnimals from './ListAnimals';
import SingleAnimal from './SingleAnimal';
import FormOne from './FormOne';
import FormTwo from './FormTwo';
import Header from './Header';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: '',
      animal: 'dog',
      animals: [],
      breedList: [],
      breed: '',
      gender: 'M',
      age: 'Baby',
      size: 'S',
      currentAnimal: [],
      count: '25',
      wrongZipcode: false,
      expanded: false,
    };
    this.handleZipcode = this.handleZipcode.bind(this);
    this.handleAnimal = this.handleAnimal.bind(this);
    this.handleSubmitBasic = this.handleSubmitBasic.bind(this);
    this.handleSubmitFull = this.handleSubmitFull.bind(this);
    this.handleBreed = this.handleBreed.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleSize = this.handleSize.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleCount = this.handleCount.bind(this);
    this.handleAnimalClick = this.handleAnimalClick.bind(this);
    this.fetchBreed = this.fetchBreed.bind(this);
    this.handleExpandClick = this.handleExpandClick.bind(this);
  }

  handleZipcode(e) {
    this.setState({ zipCode: e.target.value });
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

  handleCount(e) {
    this.setState({ count: e.target.value });
  }

  handleAnimalClick(id) {
    const { animals } = this.state;

    this.setState({ currentAnimal: animals.filter(x => x.id.$t === id) });
  }

  handleExpandClick() {
    this.setState(state => ({ expanded: !state.expanded }));
  }

  handleSubmitBasic(e) {
    const { zipCode, animal, count } = this.state;

    fetch(`/petbasicfind/${animal}/${zipCode}/${count}`)
      .then(res => res.json())
      .then(data => this.setState({
        animals: data.petfinder.pets.pet,
        wrongZipcode: false,
      }, this.fetchBreed()))
      .catch(() => this.setState({ wrongZipcode: true }));

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
      zipCode,
      animal,
      breed,
      age,
      gender,
      size,
      count,
    } = this.state;

    fetch(`/petfullfind/${animal}/${zipCode}/${breed}/${gender}/${age}/${size}/${count}`)
      .then(res => res.json())
      .then(data => this.setState({ animals: data.petfinder.pets.pet }))
      .catch(err => console.log(err));

    e.preventDefault();
  }

  render() {
    const {
      animals,
      breedList,
      currentAnimal,
      zipCode,
      animal,
      count,
      breed,
      size,
      age,
      gender,
      wrongZipcode,
      expanded,
    } = this.state;

    return (
      <div>
        <Header />
        <section>
          <Grid container spacing={24} justify="space-around">
            <Grid item xs={2}>
              <FormOne
                onFormSubmit={this.handleSubmitBasic}
                onChangeZipcode={this.handleZipcode}
                onChangeAnimal={this.handleAnimal}
                onChangeCount={this.handleCount}
                stateZipCode={zipCode}
                stateAnimal={animal}
                stateCount={count}
                stateWrongZipCode={wrongZipcode}
              />
              <div id="formTwo">
                <FormTwo
                  onFormFullSubmit={this.handleSubmitFull}
                  onChangeBreed={this.handleBreed}
                  onChangeGender={this.handleBreed}
                  onChangeAge={this.handleAge}
                  onChangeSize={this.handleSize}
                  onChangeCount={this.handleCount}
                  stateBreedList={breedList}
                  stateBreed={breed}
                  stateGender={gender}
                  stateAge={age}
                  stateSize={size}
                  stateCount={count}
                />
              </div>
            </Grid>
            <Grid item xs={5}>
              {animals === undefined ? 'No Result'
                : (
                  <ListAnimals
                    listOfAnimals={animals}
                    animalClickHandler={this.handleAnimalClick}
                  />
                )}
            </Grid>
            <Grid item xs={4}>
              {currentAnimal.length === 0 ? null
                : (
                  <SingleAnimal
                    singleAnimalDisplay={currentAnimal}
                    stateExpanded={expanded}
                    onChangeExpanded={this.handleExpandClick}
                  />
                )}
            </Grid>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Dashboard;

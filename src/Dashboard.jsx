import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import CssBaseline from '@material-ui/core/CssBaseline';

import ListAnimals from './ListAnimals';
import SingleAnimal from './SingleAnimal';
import FormOne from './FormOne';
import FormTwo from './FormTwo';
import Header from './Header';
import Footer from './Footer';

const styles = {
  grid: {
    paddingTop: 80,
  },
};

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
      expandedForm: false,
      expandedAbout: false,
      expandedHealth: false,
      themeType: 'light',
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
    this.handleExpandClickForm = this.handleExpandClickForm.bind(this);
    this.handleExpandClickAbout = this.handleExpandClickAbout.bind(this);
    this.handleExpandClickHealth = this.handleExpandClickHealth.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
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

  handleExpandClickForm() {
    this.setState(state => ({ expandedForm: !state.expandedForm }));
  }

  handleExpandClickAbout() {
    this.setState(state => ({ expandedAbout: !state.expandedAbout }));
  }

  handleExpandClickHealth() {
    this.setState(state => ({ expandedHealth: !state.expandedHealth }));
  }

  toggleTheme() {
    const { themeType } = this.state;

    return themeType === 'light'
      ? this.setState({ themeType: 'dark' })
      : this.setState({ themeType: 'light' });
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
        breedList: data.petfinder.breeds.breed.filter(x => !x.$t.includes('/')),
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
      .then(data => this.setState({ animals: data.petfinder.pets.pet }));

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
      expandedForm,
      expandedAbout,
      expandedHealth,
      themeType,
    } = this.state;

    const theme = createMuiTheme({
      palette: {
        primary: pink,
        type: themeType,
      },
    });

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Header
          onToggleTheme={this.toggleTheme}
        />
        <Grid container justify="space-around" style={styles.grid}>
          <Grid item xs={2}>
            <Grid container spacing={8} direction="column" className="animated rubberBand">
              <Grid item>
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
              </Grid>
              <Grid item>
                <FormTwo
                  onFormFullSubmit={this.handleSubmitFull}
                  onChangeBreed={this.handleBreed}
                  onChangeGender={this.handleGender}
                  onChangeAge={this.handleAge}
                  onChangeSize={this.handleSize}
                  onChangeCount={this.handleCount}
                  stateBreedList={breedList}
                  stateBreed={breed}
                  stateGender={gender}
                  stateAge={age}
                  stateSize={size}
                  stateCount={count}
                  stateExpandedForm={expandedForm}
                  onChangeExpandedForm={this.handleExpandClickForm}
                />
              </Grid>
              <Grid item>
                <Footer />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            {animals === undefined
              ? (
                <Typography align="center" variant="subheading">
                  {'No Result '}
                  <span role="img" aria-label="sad">
                    😢
                  </span>
                </Typography>
              )
              : (
                <ListAnimals
                  listOfAnimals={animals}
                  animalClickHandler={this.handleAnimalClick}
                />
              )}
          </Grid>
          <Grid item xs={5}>
            {currentAnimal.length === 0 ? null
              : (
                <SingleAnimal
                  singleAnimalDisplay={currentAnimal}
                  stateExpanded={expanded}
                  onChangeExpanded={this.handleExpandClick}
                  onChangeExpandedAbout={this.handleExpandClickAbout}
                  stateExpandedAbout={expandedAbout}
                  onChangeExpandedHealth={this.handleExpandClickHealth}
                  stateExpandedHealth={expandedHealth}
                />
              )}
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default Dashboard;

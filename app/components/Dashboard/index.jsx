import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ScrollToTop from 'react-scroll-up';

import ListAnimals from '../ListAnimals';
import SingleAnimal from '../SingleAnimal';
import FormOne from '../FormOne';
import FormTwo from '../FormTwo';
import Header from '../Header';
import Footer from '../Footer';

import styles from './styles';
import 'animate.css/source/bouncing_entrances/bounceIn.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: '',
      animal: 'dog',
      count: '25',
      breed: '',
      gender: 'M',
      age: 'Baby',
      size: 'S',
      animals: [],
      breedList: [],
      currentAnimal: [],
      wrongZipcode: false,
      expandedInfo: false,
      expandedForm: false,
      expandedAbout: false,
      expandedHealth: false,
      expandedGallery: false,
      theme: 'light',
    };
    this.handleEvent = this.handleEvent.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
    this.handleAnimalClick = this.handleAnimalClick.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
    this.handleSubmitBasic = this.handleSubmitBasic.bind(this);
    this.fetchBreed = this.fetchBreed.bind(this);
    this.handleSubmitFull = this.handleSubmitFull.bind(this);
  }

  handleEvent(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleExpand(e) {
    this.setState(state => ({ [e]: !state[e] }));
  }

  handleAnimalClick(id) {
    const { animals } = this.state;

    this.setState({ currentAnimal: animals.filter(x => x.id.$t === id) });
  }

  toggleTheme() {
    const { theme } = this.state;

    return theme === 'light'
      ? this.setState({ theme: 'dark' })
      : this.setState({ theme: 'light' });
  }

  handleSubmitBasic(e) {
    const { zipCode, animal, count } = this.state;

    fetch(`api/petbasicfind/${animal}/${zipCode}/${count}`)
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

    fetch(`api/breedlist/${animal}`)
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

    fetch(`api/petfullfind/${animal}/${zipCode}/${breed}/${gender}/${age}/${size}/${count}`)
      .then(res => res.json())
      .then(data => this.setState({ animals: data.petfinder.pets.pet }));

    e.preventDefault();
  }

  render() {
    const {
      animals,
      breedList,
      currentAnimal,
      animal,
      count,
      breed,
      size,
      age,
      gender,
      wrongZipcode,
      expandedInfo,
      expandedForm,
      expandedAbout,
      expandedHealth,
      expandedGallery,
      theme,
    } = this.state;

    const themeMode = createMuiTheme({
      palette: {
        primary: pink,
        type: theme,
      },
    });

    return (
      <div className="animated bounceIn">
        <MuiThemeProvider theme={themeMode}>
          <CssBaseline />
          <Header
            onToggleTheme={this.toggleTheme}
          />
          <Grid container justify="space-around" style={styles.grid}>
            <Grid item xs={2}>
              <Grid container spacing={8} direction="column">
                <Grid item>
                  <FormOne
                    onFormSubmit={this.handleSubmitBasic}
                    handleEvent={this.handleEvent}
                    stateAnimal={animal}
                    stateCount={count}
                    stateWrongZipCode={wrongZipcode}
                  />
                </Grid>
                <Grid item>
                  <FormTwo
                    onFormFullSubmit={this.handleSubmitFull}
                    handleEvent={this.handleEvent}
                    stateBreedList={breedList}
                    stateBreed={breed}
                    stateGender={gender}
                    stateAge={age}
                    stateSize={size}
                    stateCount={count}
                    stateExpandedForm={expandedForm}
                    handleExpand={this.handleExpand}
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
                    stateExpandedInfo={expandedInfo}
                    stateExpandedAbout={expandedAbout}
                    stateExpandedHealth={expandedHealth}
                    stateExpandedGallery={expandedGallery}
                    handleExpand={this.handleExpand}
                  />
                )}
            </Grid>
          </Grid>
          <ScrollToTop showUnder={160}>
            <Button variant="fab" color="primary" mini>
              <ExpandLess />
            </Button>
          </ScrollToTop>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Dashboard;

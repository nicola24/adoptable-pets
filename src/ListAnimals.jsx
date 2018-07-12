import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import DisplayAnimal from './DisplayAnimal';

const ListAnimals = ({ listOfAnimals, animalClickHandler }) => (
  <div>
    <div>
      {listOfAnimals.length === 0 ? null
        : (
          <AppBar position="static" color="default">
            <Toolbar>
              <Typography variant="title" color="inherit">
                {`Number of Result: ${listOfAnimals.length}`}
              </Typography>
            </Toolbar>
          </AppBar>
        )}
    </div>
    <div>
      {listOfAnimals.map(x => (
        <DisplayAnimal
          singleAnimal={x}
          key={x.id.$t}
          animalClickHandler={animalClickHandler}
        />))}
    </div>
  </div>
);

ListAnimals.propTypes = {
  listOfAnimals: PropTypes.arrayOf(PropTypes.object).isRequired,
  animalClickHandler: PropTypes.func.isRequired,
};

export default ListAnimals;

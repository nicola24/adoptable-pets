import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import DisplayAnimal from '../DisplayAnimal';

const ListAnimals = ({ listOfAnimals, animalClickHandler }) => (
  <div>
    <div>
      {listOfAnimals.length === 0 ? null
        : (
          <Typography align="center" color="textSecondary">
            {`Number of Results: ${listOfAnimals.length}`}
          </Typography>
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

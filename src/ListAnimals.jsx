import React from 'react';
import PropTypes from 'prop-types';

import DisplayAnimal from './DisplayAnimal';

const ListAnimals = ({ listOfAnimals, animalClickHandler }) => (
  <div>
    <div>
      {listOfAnimals.length === 0 ? null
        : (
          <p>
            {`Number of Result: ${listOfAnimals.length}`}
          </p>
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

import React from 'react';

import DisplayAnimal from './DisplayAnimal';

const ListAnimals = ({ listOfAnimals, animalClickHandler }) => (
  <div>
    {listOfAnimals.map(x => (
      <DisplayAnimal singleAnimal={x} key={x.id.$t} animalClickHandler={animalClickHandler} />))}
  </div>
);

export default ListAnimals;

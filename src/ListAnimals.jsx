import React from 'react';

import DisplayAnimal from './DisplayAnimal';

const ListAnimals = ({ listOfAnimals }) => (
  <div>
    {listOfAnimals.map(x => <DisplayAnimal singleAnimal={x} key={x.id.$t} />)}
  </div>
);

export default ListAnimals;

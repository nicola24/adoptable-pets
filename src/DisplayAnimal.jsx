import React from 'react';
import PropTypes from 'prop-types';

const DisplayAnimal = ({ singleAnimal, animalClickHandler }) => {
  const filterImgList = singleAnimal.media.photos
    ? singleAnimal.media.photos.photo.filter(x => x['@size'] === 'fpm')[0].$t
    : 'https://i.imgur.com/9qsrEyw.jpg';

  const breedList = Array.isArray(singleAnimal.breeds.breed)
    ? singleAnimal.breeds.breed.map(x => Object.values(x)).join(' & ')
    : singleAnimal.breeds.breed.$t;

  return (
    <div
      onClick={() => animalClickHandler(singleAnimal.id.$t)}
      onKeyPress={() => animalClickHandler(singleAnimal.id.$t)}
      role="button"
      tabIndex={0}
    >
      <img src={filterImgList} alt="" />
      <p>
        {singleAnimal.name.$t}
      </p>
      <p>
        {singleAnimal.contact.city.$t}
      </p>
      <p>
        {singleAnimal.age.$t}
      </p>
      <p>
        {singleAnimal.sex.$t === 'M' ? 'Male' : 'Female'}
      </p>
      <p>
        {breedList}
      </p>
    </div>
  );
};

DisplayAnimal.propTypes = {
  singleAnimal: PropTypes.objectOf(PropTypes.object).isRequired,
  animalClickHandler: PropTypes.func.isRequired,
};

export default DisplayAnimal;

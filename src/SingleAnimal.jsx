import React from 'react';

const SingleAnimal = ({ singleAnimalDisplay }) => {
  const filterImgList = singleAnimalDisplay[0].media.photos
    ? singleAnimalDisplay[0].media.photos.photo.filter(x => x['@size'] === 'x')[0].$t
    : 'https://i.imgur.com/9qsrEyw.jpg';

  const breedList = Array.isArray(singleAnimalDisplay[0].breeds.breed)
    ? singleAnimalDisplay[0].breeds.breed.map(x => Object.values(x)).join(' & ')
    : singleAnimalDisplay[0].breeds.breed.$t;

  const animalOptions = Array.isArray(singleAnimalDisplay[0].options.option)
    ? singleAnimalDisplay[0].options.option.map(x => Object.values(x)).join(', ')
    : null;

  return (
    <div>
      <img src={filterImgList} alt="" />
      <h3>
        {singleAnimalDisplay[0].name.$t}
      </h3>
      <h3>
        {singleAnimalDisplay[0].age.$t}
      </h3>
      <h3>
        {singleAnimalDisplay[0].sex.$t === 'M' ? 'Male' : 'Female'}
      </h3>
      <h3>
        {breedList}
      </h3>
      <h3>
        {animalOptions}
      </h3>
      <h4>
        {singleAnimalDisplay[0].description.$t}
      </h4>
      <h4>
        {singleAnimalDisplay[0].contact.address1.$t}
      </h4>
      <h4>
        {singleAnimalDisplay[0].contact.city.$t}
        {singleAnimalDisplay[0].contact.state.$t}
        {singleAnimalDisplay[0].contact.zip.$t}
      </h4>
      <h4>
        {singleAnimalDisplay[0].contact.phone.$t}
      </h4>
      <a href={`mailto:${singleAnimalDisplay[0].contact.email.$t}`}>
        {singleAnimalDisplay[0].contact.email.$t}
      </a>
    </div>
  );
};

export default SingleAnimal;

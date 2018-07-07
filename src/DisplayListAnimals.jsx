import React from 'react';

const DisplayListAnimals = ({ singleAnimal }) => (
  <div>
    <ul>
      <li>
        <div>
          {
          (singleAnimal.media.photos)
            ? (
              <img src={singleAnimal.media.photos.photo.filter(x => x['@size'] === 'fpm')[0].$t} alt="No img" />
            )
            : (
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" alt="" height="95" />
            )
          }
        </div>
        <p>
          {singleAnimal.name.$t}
        </p>
        <p>
          {singleAnimal.age.$t}
        </p>
        <p>
          {singleAnimal.sex.$t === 'M' ? 'Male' : 'Female'}
        </p>
        <div>
          {
          Array.isArray(singleAnimal.breeds.breed)
            ? (
              <p>
                {singleAnimal.breeds.breed.map(x => Object.values(x)).join(' & ')}
              </p>
            )
            : (
              <p>
                {singleAnimal.breeds.breed.$t}
              </p>
            )
          }
        </div>
      </li>
    </ul>
  </div>
);

export default DisplayListAnimals;

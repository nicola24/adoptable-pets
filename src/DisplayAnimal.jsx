import React from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';

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
      <List>
        <ListItem button>
          <Avatar alt="" src={filterImgList} />
          <ListItemText primary={singleAnimal.name.$t} />
          <ListItemText primary={singleAnimal.contact.city.$t} />
          <ListItemText primary={singleAnimal.age.$t} />
          <ListItemText primary={singleAnimal.sex.$t === 'M' ? 'Male' : 'Female'} />
          <ListItemText primary={breedList} />
        </ListItem>
      </List>
      <Divider />
    </div>
  );
};

DisplayAnimal.propTypes = {
  singleAnimal: PropTypes.objectOf(PropTypes.object).isRequired,
  animalClickHandler: PropTypes.func.isRequired,
};

export default DisplayAnimal;

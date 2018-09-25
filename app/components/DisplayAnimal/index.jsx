import React from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';

import styles from './styles';
import 'animate.css/source/attention_seekers/rubberBand.css';

const DisplayAnimal = ({ singleAnimal, animalClickHandler }) => {
  const filterImgList = singleAnimal.media.photos
    ? (
      <Avatar
        alt=""
        src={singleAnimal.media.photos.photo.filter(x => x['@size'] === 'fpm')[0].$t}
        style={styles.avatar}
      />
    ) : (
      <Avatar style={styles.avatar}>
        {singleAnimal.name.$t[0].toUpperCase()}
      </Avatar>
    );

  const breedList = Array.isArray(singleAnimal.breeds.breed)
    ? `${singleAnimal.breeds.breed[0].$t} Mix`
    : singleAnimal.breeds.breed.$t;

  return (
    <div
      onClick={() => animalClickHandler(singleAnimal.id.$t)}
      onKeyPress={() => animalClickHandler(singleAnimal.id.$t)}
      role="button"
      tabIndex={0}
    >
      <List className="animated rubberBand">
        <ListItem button dense>
          {filterImgList}
          <ListItemText
            primary={singleAnimal.name.$t}
            secondary={`${singleAnimal.sex.$t === 'M' ? 'Male' : 'Female'}, ${singleAnimal.age.$t}`}
          />
          <ListItemText primary={singleAnimal.contact.city.$t} />
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

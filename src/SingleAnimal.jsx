import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ContactMail from '@material-ui/icons/ContactMail';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

const SingleAnimal = ({ singleAnimalDisplay, stateExpanded, onChangeExpanded }) => {
  const filterImgList = singleAnimalDisplay[0].media.photos
    ? singleAnimalDisplay[0].media.photos.photo.filter(x => x['@size'] === 'x')[0].$t
    : 'https://i.imgur.com/9qsrEyw.jpg';

  const breedList = Array.isArray(singleAnimalDisplay[0].breeds.breed)
    ? singleAnimalDisplay[0].breeds.breed.map(x => Object.values(x)).join(' & ')
    : singleAnimalDisplay[0].breeds.breed.$t;

  const animalOptions = Array.isArray(singleAnimalDisplay[0].options.option)
    ? singleAnimalDisplay[0].options.option.map(x => Object.values(x)).join(', ')
    : null;

  const fullAdress = `${singleAnimalDisplay[0].contact.city.$t}
                      ${singleAnimalDisplay[0].contact.state.$t}
                      ${singleAnimalDisplay[0].contact.zip.$t}`;

  return (
    <div>
      <Card>
        <img src={filterImgList} alt="" />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {singleAnimalDisplay[0].name.$t}
          </Typography>
          <Typography variant="subheading">
            {breedList}
          </Typography>
          <Typography paragraph variant="subheading">
            {animalOptions}
          </Typography>
          <Typography paragraph component="p">
            {singleAnimalDisplay[0].description.$t}
          </Typography>
        </CardContent>
        <IconButton onClick={onChangeExpanded}>
          <ExpandMoreIcon />
        </IconButton>
        <Collapse in={stateExpanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph variant="subheading">
              <ContactMail />
              Address:
            </Typography>
            <Typography>
              {singleAnimalDisplay[0].contact.address1.$t}
            </Typography>
            <Typography paragraph>
              {fullAdress}
            </Typography>
            <Typography paragraph>
              {singleAnimalDisplay[0].contact.phone.$t}
            </Typography>
            <Typography paragraph>
              <a href={`mailto:${singleAnimalDisplay[0].contact.email.$t}`}>
                {singleAnimalDisplay[0].contact.email.$t}
              </a>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

SingleAnimal.propTypes = {
  singleAnimalDisplay: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChangeExpanded: PropTypes.func.isRequired,
  stateExpanded: PropTypes.bool.isRequired,
};

export default SingleAnimal;

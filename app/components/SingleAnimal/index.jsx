import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Pets from '@material-ui/icons/Pets';
import LocationOn from '@material-ui/icons/LocationOn';
import Mail from '@material-ui/icons/Mail';
import Phone from '@material-ui/icons/Phone';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';

import ImgGallery from '../ImgGallery';

import 'animate.css/source/fading_entrances/fadeInRightBig.css';
import 'animate.css/source/attention_seekers/tada.css';
import styles from './styles';

const SingleAnimal = ({
  singleAnimalDisplay, stateExpandedInfo, handleExpand,
  stateExpandedAbout, stateExpandedHealth, stateExpandedGallery,
}) => {
  const ImgOrAvatar = singleAnimalDisplay[0].media.photos ? (
    <div>
      <Grid
        item
        onClick={() => handleExpand('expandedGallery')}
        onMouseOver={() => handleExpand('expandedGallery')} // HERE
      >
        <Avatar
          style={styles.avatar}
          alt="pet_img"
          src={singleAnimalDisplay[0].media.photos.photo[2].$t}
        />
      </Grid>
      <Grid item>
        {/* <ImgGallery singleAnimalDisplay={singleAnimalDisplay} /> */}
        <Drawer
          anchor="right"
          open={stateExpandedGallery}
          onClose={() => handleExpand('expandedGallery')}
        >
          <div style={styles.drawer}>
            <ImgGallery singleAnimalDisplay={singleAnimalDisplay} />
          </div>
        </Drawer>
      </Grid>
    </div>
  ) : (
    <Grid item>
      <Avatar style={styles.avatar}>
        {singleAnimalDisplay[0].name.$t[0].toUpperCase()}
      </Avatar>
    </Grid>
  );

  const breedList = Array.isArray(singleAnimalDisplay[0].breeds.breed)
    ? singleAnimalDisplay[0].breeds.breed.map(x => Object.values(x)).join(' & ')
    : singleAnimalDisplay[0].breeds.breed.$t;

  const animalOptions = Array.isArray(singleAnimalDisplay[0].options.option)
    ? singleAnimalDisplay[0].options.option.map(x => Object.values(x)).join(', ')
    : null;

  const fullAdress = `${singleAnimalDisplay[0].contact.city.$t}
                      ${singleAnimalDisplay[0].contact.state.$t}
                      ${singleAnimalDisplay[0].contact.zip.$t}`;

  const gender = singleAnimalDisplay[0].sex.$t === 'M' ? 'Male' : 'Female';

  const size = () => {
    let result = '';
    if (singleAnimalDisplay[0].size.$t === 'S') result = 'Small';
    if (singleAnimalDisplay[0].size.$t === 'M') result = 'Medium';
    if (singleAnimalDisplay[0].size.$t === 'L') result = 'Large';
    if (singleAnimalDisplay[0].size.$t === 'XL') result = 'Extra-large';
    return result;
  };

  return (
    <Card className="animated fadeInRightBig">
      <CardContent>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          {ImgOrAvatar}
        </Grid>
      </CardContent>
      <CardContent>
        <Typography gutterBottom variant="display1" component="h2" color="primary">
          <Grid container spacing={16} alignItems="center">
            <Grid item>
              <Pets />
            </Grid>
            <Grid item>
              {`Meet ${singleAnimalDisplay[0].name.$t}`}
            </Grid>
          </Grid>
        </Typography>
        <Typography paragraph variant="subheading">
          {`${breedList} • ${singleAnimalDisplay[0].contact.city.$t}, ${singleAnimalDisplay[0].contact.state.$t}`}
        </Typography>
        <Typography paragraph variant="subheading">
          {`${singleAnimalDisplay[0].age.$t} • ${gender} • ${size()}`}
        </Typography>
      </CardContent>
      <Typography variant="headline" color="primary">
        <IconButton onClick={(() => handleExpand('expandedHealth'))}>
          <ExpandMoreIcon />
        </IconButton>
        Health
      </Typography>
      <Collapse in={stateExpandedHealth} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph variant="subheading">
            {animalOptions}
          </Typography>
        </CardContent>
      </Collapse>
      <Typography variant="headline" color="primary">
        <IconButton onClick={() => handleExpand('expandedAbout')}>
          <ExpandMoreIcon />
        </IconButton>
        About
      </Typography>
      <Collapse in={stateExpandedAbout} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph component="p" align="justify">
            {singleAnimalDisplay[0].description.$t}
          </Typography>
        </CardContent>
      </Collapse>
      <Typography variant="headline" color="primary">
        <IconButton onClick={() => handleExpand('expandedInfo')}>
          <ExpandMoreIcon />
        </IconButton>
        Contact Information
      </Typography>
      <Collapse in={stateExpandedInfo} timeout="auto" unmountOnExit>
        <CardContent>
          <Grid container spacing={16} alignItems="baseline" justify="flex-start">
            <Grid item>
              <LocationOn />
            </Grid>
            <Grid item>
              <Typography paragraph variant="subheading">
                {singleAnimalDisplay[0].contact.address1.$t}
                <br />
                {fullAdress}
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={16} alignItems="baseline" justify="flex-start">
            <Grid item>
              <Phone />
            </Grid>
            <Grid item>
              <Typography paragraph variant="subheading">
                {singleAnimalDisplay[0].contact.phone.$t}
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={16} alignItems="baseline" justify="flex-start">
            <Grid item>
              <Mail />
            </Grid>
            <Grid item>
              <Typography paragraph variant="subheading">
                {singleAnimalDisplay[0].contact.email.$t}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
};

SingleAnimal.propTypes = {
  singleAnimalDisplay: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleExpand: PropTypes.func.isRequired,
  stateExpandedInfo: PropTypes.bool.isRequired,
  stateExpandedAbout: PropTypes.bool.isRequired,
  stateExpandedHealth: PropTypes.bool.isRequired,
  stateExpandedGallery: PropTypes.bool.isRequired,
};

export default SingleAnimal;

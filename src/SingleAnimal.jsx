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
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Grid from '@material-ui/core/Grid';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    height: 500,
  },
  avatar: {
    width: 200,
    height: 200,
    fontSize: 100,
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 10,
  },
};

const SingleAnimal = ({
  singleAnimalDisplay, stateExpanded, onChangeExpanded, onChangeExpandedAbout,
  stateExpandedAbout, onChangeExpandedHealth, stateExpandedHealth,
}) => {
  const filterImgList = singleAnimalDisplay[0].media.photos
    ? (
      <div style={styles.root}>
        <GridList cellHeight="auto" style={styles.gridList} cols={2}>
          {singleAnimalDisplay[0].media.photos.photo.filter(x => x['@size'] === 'pn').map(tile => (
            <GridListTile key={tile['@id']}>
              <img src={tile.$t} alt="" />
            </GridListTile>
          ))}
        </GridList>
      </div>
    ) : (
      <div style={styles.row}>
        <Avatar style={styles.avatar}>
          {singleAnimalDisplay[0].name.$t[0].toUpperCase()}
        </Avatar>
      </div>
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
    <div>
      <Card className="animated bounceIn">
        <CardContent>
          {filterImgList}
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
          <IconButton onClick={onChangeExpandedHealth}>
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
          <IconButton onClick={onChangeExpandedAbout}>
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
          <IconButton onClick={onChangeExpanded}>
            <ExpandMoreIcon />
          </IconButton>
          Contact Information
        </Typography>
        <Collapse in={stateExpanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph variant="subheading">
              <Grid container spacing={16} alignItems="center">
                <Grid item>
                  <LocationOn />
                </Grid>
                <Grid item>
                  {singleAnimalDisplay[0].contact.address1.$t}
                  <br />
                  {fullAdress}
                </Grid>
              </Grid>
            </Typography>
            <Typography paragraph variant="subheading">
              <Grid container spacing={16} alignItems="center">
                <Grid item>
                  <Phone />
                </Grid>
                <Grid item>
                  {singleAnimalDisplay[0].contact.phone.$t}
                </Grid>
              </Grid>
            </Typography>
            <Typography paragraph variant="subheading">
              <Grid container spacing={16} alignItems="center">
                <Grid item>
                  <Mail />
                </Grid>
                <Grid item>
                  {singleAnimalDisplay[0].contact.email.$t}
                </Grid>
              </Grid>
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
  onChangeExpandedAbout: PropTypes.func.isRequired,
  stateExpandedAbout: PropTypes.bool.isRequired,
  onChangeExpandedHealth: PropTypes.func.isRequired,
  stateExpandedHealth: PropTypes.bool.isRequired,
};

export default SingleAnimal;

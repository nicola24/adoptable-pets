import React from 'react';
import PropTypes from 'prop-types';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { animalAge, animalSize, moreResults } from '../../utils/options';
import styles from './styles';
import DropDown from './DropDown';

const FormTwo = ({
  onFormFullSubmit, handleEvent, stateBreedList, stateBreed, stateGender,
  stateAge, stateSize, stateCount, stateExpandedForm, handleExpand,
}) => (
  <Card>
    <Typography variant="subheading">
      <IconButton onClick={() => handleExpand('expandedForm')}>
        <ExpandMoreIcon />
      </IconButton>
      Advanced Search
    </Typography>
    <Collapse in={stateExpandedForm} timeout="auto" unmountOnExit>
      <CardContent>
        <form onSubmit={onFormFullSubmit}>
          <FormControl fullWidth>
            <DropDown value={stateBreed} onChange={handleEvent} name="breed">
              {stateBreedList.map(x => (
                <option value={x.$t} key={x.$t}>
                  {x.$t}
                </option>
              ))}
            </DropDown>
            <FormHelperText>
              Pick a breed
            </FormHelperText>
            <RadioGroup
              value={stateGender}
              onChange={handleEvent}
              style={styles.select}
              name="gender"
            >
              <FormControlLabel value="M" control={<Radio color="primary" />} label="Male" />
              <FormControlLabel value="F" control={<Radio color="primary" />} label="Female" />
            </RadioGroup>
            <FormHelperText>
              Gender
            </FormHelperText>
            <Select value={stateAge} onChange={handleEvent} style={styles.select} name="age">
              {animalAge.map(x => (
                <MenuItem value={x.htmlValue} key={x.id}>
                  {x.option}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>
              Pick an age
            </FormHelperText>
            <Select value={stateSize} onChange={handleEvent} style={styles.select} name="size">
              {animalSize.map(x => (
                <MenuItem value={x.htmlValue} key={x.id}>
                  {x.option}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>
              Pick a size
            </FormHelperText>
            <Select value={stateCount} onChange={handleEvent} style={styles.select} name="count">
              {moreResults.map(x => (
                <MenuItem value={x.htmlValue} key={x.htmlValue}>
                  {x.htmlValue}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>
              Number of Results
            </FormHelperText>
            <div style={styles.button}>
              <Button variant="contained" type="submit">
                Update Search
              </Button>
            </div>
          </FormControl>
        </form>
      </CardContent>
    </Collapse>
  </Card>
);

FormTwo.propTypes = {
  onFormFullSubmit: PropTypes.func.isRequired,
  handleEvent: PropTypes.func.isRequired,
  stateBreedList: PropTypes.arrayOf(PropTypes.object).isRequired,
  stateBreed: PropTypes.string.isRequired,
  stateGender: PropTypes.string.isRequired,
  stateAge: PropTypes.string.isRequired,
  stateSize: PropTypes.string.isRequired,
  stateCount: PropTypes.string.isRequired,
  stateExpandedForm: PropTypes.bool.isRequired,
  handleExpand: PropTypes.func.isRequired,
};

export default FormTwo;

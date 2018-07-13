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
import FormLabel from '@material-ui/core/FormLabel';

import { animalAge, animalSize, moreResults } from './data/dropdownOptions';

const FormTwo = ({
  onFormFullSubmit, onChangeBreed, onChangeGender, onChangeAge,
  onChangeSize, onChangeCount, stateBreedList, stateBreed, stateGender,
  stateAge, stateSize, stateCount, stateExpandedForm, onChangeExpandedForm,
}) => (
  <Card>
    <Typography variant="subheading">
      <IconButton onClick={onChangeExpandedForm}>
        <ExpandMoreIcon />
      </IconButton>
      Advanced Search
    </Typography>
    <Collapse in={stateExpandedForm} timeout="auto" unmountOnExit>
      <CardContent>
        <form onSubmit={onFormFullSubmit}>
          <FormControl fullWidth>

            <select value={stateBreed} onChange={onChangeBreed}>
              {stateBreedList.map(x => (
                <option value={x.$t} key={x.$t}>
                  {x.$t}
                </option>
              ))}
            </select>
            <FormHelperText>
              Pick a breed
            </FormHelperText>

            <FormLabel component="legend">
              Gender
            </FormLabel>
            <RadioGroup
              value={stateGender}
              onChange={onChangeGender}
            >
              <FormControlLabel value="M" control={<Radio color="primary" />} label="Male" />
              <FormControlLabel value="F" control={<Radio color="primary" />} label="Female" />
            </RadioGroup>

            <Select value={stateAge} onChange={onChangeAge}>
              {animalAge.map(x => (
                <MenuItem value={x.htmlValue} key={x.id}>
                  {x.option}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>
              Pick an age
            </FormHelperText>

            <Select value={stateSize} onChange={onChangeSize}>
              {animalSize.map(x => (
                <MenuItem value={x.htmlValue} key={x.id}>
                  {x.option}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>
              Pick a size
            </FormHelperText>

            <Select value={stateCount} onChange={onChangeCount}>
              {moreResults.map(x => (
                <MenuItem value={x.htmlValue} key={x.htmlValue}>
                  {x.htmlValue}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>
              Number of Results
            </FormHelperText>

            <Button variant="contained" type="submit">
              Update
            </Button>

          </FormControl>
        </form>
      </CardContent>
    </Collapse>
  </Card>
);

FormTwo.propTypes = {
  onFormFullSubmit: PropTypes.func.isRequired,
  onChangeBreed: PropTypes.func.isRequired,
  onChangeGender: PropTypes.func.isRequired,
  onChangeAge: PropTypes.func.isRequired,
  onChangeSize: PropTypes.func.isRequired,
  onChangeCount: PropTypes.func.isRequired,
  stateBreedList: PropTypes.arrayOf(PropTypes.object).isRequired,
  stateBreed: PropTypes.string.isRequired,
  stateGender: PropTypes.string.isRequired,
  stateAge: PropTypes.string.isRequired,
  stateSize: PropTypes.string.isRequired,
  stateCount: PropTypes.string.isRequired,
  stateExpandedForm: PropTypes.bool.isRequired,
  onChangeExpandedForm: PropTypes.func.isRequired,
};

export default FormTwo;

{/* <Select value={stateGender} onChange={onChangeGender}>
  <MenuItem value="M">
    Male
  </MenuItem>
  <MenuItem value="F">
    Female
  </MenuItem>
</Select>
<FormHelperText>
  Pick a gender
</FormHelperText> */}

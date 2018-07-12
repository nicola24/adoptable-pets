import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

import { typeOfAnimal, moreResults } from './data/dropdownOptions';

const FormOne = ({
  onFormSubmit, onChangeZipcode, onChangeAnimal, onChangeCount,
  stateZipCode, stateAnimal, stateCount, stateWrongZipCode,
}) => (
  <div>
    <form onSubmit={onFormSubmit}>
      <FormControl fullWidth>
        <TextField
          label="Pick a ZipCode"
          type="number"
          value={stateZipCode}
          onChange={onChangeZipcode}
          error={stateWrongZipCode}
          required
        />
        {!stateWrongZipCode ? null
          : (
            <FormHelperText>
              Please select a valid ZipCode
            </FormHelperText>
          )}
        <Select value={stateAnimal} onChange={onChangeAnimal}>
          {typeOfAnimal.map(x => (
            <MenuItem value={x.htmlValue} key={x.id}>
              {x.option}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>
          Pick an animal
        </FormHelperText>
        <Select value={stateCount} onChange={onChangeCount}>
          {moreResults.map(x => (
            <MenuItem value={x.htmlValue} key={x.htmlValue}>
              {x.htmlValue}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>
          Number of results
        </FormHelperText>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </FormControl>
    </form>
  </div>
);

FormOne.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  onChangeZipcode: PropTypes.func.isRequired,
  onChangeAnimal: PropTypes.func.isRequired,
  onChangeCount: PropTypes.func.isRequired,
  stateZipCode: PropTypes.string.isRequired,
  stateAnimal: PropTypes.string.isRequired,
  stateCount: PropTypes.string.isRequired,
  stateWrongZipCode: PropTypes.bool.isRequired,
};

export default FormOne;

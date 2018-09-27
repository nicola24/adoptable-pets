import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { typeOfAnimal, moreResults } from '../../utils/options';
import styles from './styles';

const FormOne = ({
  onFormSubmit, handleEvent, stateAnimal, stateCount, stateWrongZipCode,
}) => (
  <Card>
    <CardContent>
      <form onSubmit={onFormSubmit}>
        <FormControl fullWidth>
          <TextField
            label="Pick a ZipCode"
            type="number"
            onChange={handleEvent}
            error={stateWrongZipCode}
            required
            name="zipCode"
          />
          {!stateWrongZipCode ? null
            : (
              <FormHelperText>
                Please select a valid ZipCode
              </FormHelperText>
            )}
          <Select value={stateAnimal} onChange={handleEvent} style={styles.select} name="animal">
            {typeOfAnimal.map(x => (
              <MenuItem value={x.htmlValue} key={x.id}>
                {x.option}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>
            Pick an animal
          </FormHelperText>
          <Select value={stateCount} onChange={handleEvent} style={styles.select} name="count">
            {moreResults.map(x => (
              <MenuItem value={x.htmlValue} key={x.htmlValue}>
                {x.htmlValue}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>
            Number of results
          </FormHelperText>
          <div style={styles.button}>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </div>
        </FormControl>
      </form>
    </CardContent>
  </Card>
);

FormOne.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  handleEvent: PropTypes.func.isRequired,
  stateAnimal: PropTypes.string.isRequired,
  stateCount: PropTypes.string.isRequired,
  stateWrongZipCode: PropTypes.bool.isRequired,
};

export default FormOne;

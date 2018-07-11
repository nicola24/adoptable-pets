import React from 'react';
import PropTypes from 'prop-types';

import { typeOfAnimal, moreResults } from './data/dropdownOptions';

const FormOne = ({
  onFormSubmit, onChangeZipcode, onChangeAnimal,
  onChangeCount, stateZipCode, stateAnimal, stateCount,
}) => (
  <div>
    <form onSubmit={onFormSubmit}>
      Pick a ZipCode:
      <input
        placeholder="Zip Code"
        type="number"
        value={stateZipCode}
        onChange={onChangeZipcode}
        required
      />
      Pick an animal:
      <select value={stateAnimal} onChange={onChangeAnimal}>
        {typeOfAnimal.map(x => (
          <option value={x.htmlValue} key={x.id}>
            {x.option}
          </option>
        ))}
      </select>
      Number of Results:
      <select value={stateCount} onChange={onChangeCount}>
        {moreResults.map(x => (
          <option value={x.htmlValue} key={x.htmlValue}>
            {x.htmlValue}
          </option>
        ))}
      </select>
      <input type="submit" value="Submit" />
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
  stateCount: PropTypes.number.isRequired,
};

export default FormOne;

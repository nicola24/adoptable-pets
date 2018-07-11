import React from 'react';
import PropTypes from 'prop-types';

import {
  animalAge, animalSize, moreResults,
} from './data/dropdownOptions';

const FormTwo = ({
  onFormFullSubmit, onChangeBreed, onChangeGender, onChangeAge,
  onChangeSize, onChangeCount, stateBreedList, stateBreed, stateGender,
  stateAge, stateSize, stateCount,
}) => (
  <div>
    <form onSubmit={onFormFullSubmit}>
    Pick a breed:
      <select value={stateBreed} onChange={onChangeBreed}>
        {stateBreedList.map(x => (
          <option value={x.$t} key={x.$t}>
            {x.$t}
          </option>
        ))}
      </select>
      Pick a gender:
      <select value={stateGender} onChange={onChangeGender}>
        <option value="M">
          Male
        </option>
        <option value="F">
          Female
        </option>
      </select>
      Pick an age:
      <select value={stateAge} onChange={onChangeAge}>
        {animalAge.map(x => (
          <option value={x.htmlValue} key={x.id}>
            {x.option}
          </option>
        ))}
      </select>
      Pick a size:
      <select value={stateSize} onChange={onChangeSize}>
        {animalSize.map(x => (
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
      <input type="submit" value="Update" />
    </form>
  </div>
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
  stateCount: PropTypes.number.isRequired,
};

export default FormTwo;

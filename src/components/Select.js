import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

const Select = ({options, handleChange, selected}) => (
  <SelectField
    className="select"
    value={selected ? selected.name : null}
    floatingLabelText="choose city"
    onChange={handleChange.bind(this)}
  >
      {options.map((city) => {
        return (
          <MenuItem
              key = {city.name}
              primaryText = {city.name}
              value = {city.name}
          />
        )
      })}
  </SelectField>
)

export default Select;

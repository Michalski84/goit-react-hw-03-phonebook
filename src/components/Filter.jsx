import React from 'react';

const Filter = ({ value, onChange }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder="Search contacts"
  />
);

export default Filter;

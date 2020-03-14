import React from "react";

function getYears(from, to) {
  let years = [];
  for (let i = from; i <= to; i++) {
    years.push(i);
  }
  return years;
}

const years = getYears(1950, 2025);

export default class SortByYears extends React.PureComponent {
  render() {
    const { primary_release_year, onChangeFilters } = this.props;
    return (
      <div className="form-group">
        <label htmlFor="primary_release_year">Сортировать по году:</label>
        <select
          className="form-control"
          value={primary_release_year}
          onChange={onChangeFilters}
          id="primary_release_year"
          name="primary_release_year"
        >
          {years.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

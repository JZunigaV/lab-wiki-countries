import React, { Component } from "react";

import { NavLink } from "react-router-dom";

class CountryList extends Component {
  render() {
 

    return (
        <div className="col-5 country-list-column">
        <div className="list-group country-list">
          {this.props.countries.map((country, index) => {
            return (
              
              <NavLink
                to={"/" + country.cca3}
                className="list-group-item list-group-item-action"
                key={index}
              >
                {country.name.common}
              </NavLink>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CountryList;

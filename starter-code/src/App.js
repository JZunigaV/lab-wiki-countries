import React, { Component } from "react";
import "./App.css";
//Components
import NavBar from "./components/NavBar";
import CountryList from "./components/CountryList";
import CountryDetail from "./components/CountryDetail";

//Data
import countries from "./countries.json";
//Router
import { Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    countries: countries
  };

  getCountryFromCCA3 = cca3 => {
   
    return this.state.countries.find(country => {
      return cca3 === country.cca3;
    });
  };

  render() {
    return (
      <div className="App">
        <NavBar />

        <div className="row">
          <CountryList countries={this.state.countries} />

          <Switch>
            <Route exact path="/" render={() => <div />} />

            {this.state.countries.map((country, index) => {
              return (
                <Route
                  exact
                  path={"/" + country.cca3}
                  render={() => (
                    <CountryDetail
                      {...country}
                      getCountryFromCCA3={this.getCountryFromCCA3}
                    />
                  )}
                  key={index}
                />
              );
            })}
          </Switch>

        </div>
      </div>
    );
  }
}

export default App;

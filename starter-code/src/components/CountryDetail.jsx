import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class CountryDetail extends Component{
 
  

  render(){
  
    console.log(this.props)
    return (
      <div className='col-7'>
        <h1>{this.props.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: '25%'}}>Capital</td>
              <td>{this.props.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{this.props.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {this.props.borders.map((borderCountry, index) => {
                    return <li key={index}><Link to={'/' + borderCountry} >{this.props.getCountryFromCCA3(borderCountry).name.common}</Link></li>
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryDetail;
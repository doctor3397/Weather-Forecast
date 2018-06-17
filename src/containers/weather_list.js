import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dateConverter } from '../helper';
import { dayConverter } from '../helper';

class WeatherList extends Component {

  // Weather Today
  renderTodayWeather(){
    return _.map(this.props.weather.list, (dailyWeather, i) => {
      // console.log("dailyWeather",dailyWeather);
      if( i == 0) {
        return(
          <div key={dailyWeather.dt}>
            <div>{dateConverter(dailyWeather.dt)}</div>
            <span className="weather__location">{this.props.weather.city.name}, {this.props.weather.city.country}</span>
            <span className="weather__today">
              <img src={`http://openweathermap.org/img/w/${dailyWeather.weather[0].icon}.png`} className="weather__next__image" />
              <span className="weather__today__temp">{ Math.round(dailyWeather.temp.day - 273)}</span><span className="weather__today__deg">°C</span>
            </span>
            <span className="weather__desc">{dailyWeather.weather[0].description}</span>
          </div>
        )
      }
    });
  }

  // Weather For the next 5 days
  renderForecastWeather(){
    return _.map(this.props.weather.list, (dailyWeather, i) => {
      // console.log("dailyWeather",dailyWeather);
      if( i > 0) {
        return(
          <li key={dailyWeather.dt} className="weather__next__item">
            <span>{dayConverter(dailyWeather.dt)}</span>
            <img src={`http://openweathermap.org/img/w/${dailyWeather.weather[0].icon}.png`} className="weather__next__image" />
            { Math.round(dailyWeather.temp.max - 273)} / { Math.round(dailyWeather.temp.min - 273)}
            <div>{dailyWeather.weather[0].description}</div>
          </li>
        )
      }
    });
  }

  render() {
    if (this.props.weather !== undefined) {
      console.log('weather:',this.props.weather);
      return (
        <div>
          {this.renderTodayWeather()}
          <ul className="weather__next">
            {this.renderForecastWeather()}
          </ul>
        </div>
      )
    }
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {SEARCH_TEXT} from './redux/action'
import { WEATHER_DATA } from './redux/action';
import './App.css';


function App() {

  const dispatch = useDispatch()
  const searchText = useSelector((state)=>state.reducer)
  const weatherData = useSelector((state)=>state.weatherReducer)
    const search = evt =>{
      if (evt.key === "Enter"){
        dispatch(WEATHER_DATA(searchText))
        dispatch(SEARCH_TEXT(''))
      }
    }

  const dateBuilder = d =>{
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  }

  return (
      <div>
        <div className={
            (typeof weatherData.main != "undefined")
            ? ((weatherData.main.temp > 16) 
              ? 'App warm'
                :'App')
                :'App'}>
            
            <main>
              <div className="search-box">
                <input
                type="text"
                className="search-bar"
                placeholder="Search..."
                onChange={e=>dispatch(SEARCH_TEXT(e.target.value))}
                value={searchText}
                onKeyPress={search}
                />
              </div>
              {(typeof weatherData.main != "undefined") ? (
              <div>
                <div className="location-box">
                <div  className="location">{weatherData.name}, {weatherData.sys.country}</div>
                  <div className="date">{dateBuilder(new Date())}</div>
              </div>
              <div className="weather-box">
                <div className="temp">
                  {Math.round(weatherData.main.temp)}°c
                </div>
                <div className="weather">{weatherData.weather[0].description}</div>
              </div>
              </div>
              ):('')}
            </main>
          </div>
      </div>  
    );
}

export default App;

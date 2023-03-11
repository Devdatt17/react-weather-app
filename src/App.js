import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SEARCH_TEXT } from './redux/action'
import { WEATHER_DATA } from './redux/action';
import './App.css';
import Main from './components/Main';
import { MONTHS, DAYS } from './constants/MonthsAndDays'

function App() {

  const dispatch = useDispatch()
  const searchText = useSelector((state) => state.reducer)
  const weatherData = useSelector((state) => state.weatherReducer)

  const search = event => {
    if (event.key === 'Enter') {
      dispatch(WEATHER_DATA(searchText))
      dispatch(SEARCH_TEXT(''))
    }
  }

    const dateBuilder = d => {
    let day = DAYS[d.getDay()];
    let date = d.getDate();
    let month = MONTHS[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  }

  return (
    <div>
      <div className={
        (typeof weatherData.main != "undefined")
          ? ((weatherData.main.temp > 16)
            ? 'App warm'
            : 'App')
          : 'App'}>

        <Main
          dispatch={dispatch}
          SEARCH_TEXT={SEARCH_TEXT}
          searchText={searchText}
          search={search}
          weatherData={weatherData}
          dateBuilder={dateBuilder}
        />
      </div>
    </div>
  );
}

export default App;

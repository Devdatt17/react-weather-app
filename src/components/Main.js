import React from "react";

export default function Main({ dispatch, SEARCH_TEXT, searchText, search, weatherData, dateBuilder }){

    const returnUpperCaseDescription = (weatherDescription)=>{
        let firstCharacter = weatherDescription.charAt(0)
        return weatherDescription.replace(firstCharacter,firstCharacter.toUpperCase())
      }
    
    return (
        <main>
            <div className="search-box">
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search..."
                    onChange={e => dispatch(SEARCH_TEXT(e.target.value))}
                    value={searchText}
                    onKeyDown={search}
                />
            </div>
            {weatherData && weatherData.cod === 200 ? (
                <div>
                    <div className="location-box">
                        <div className="location">{weatherData.name}, {weatherData.sys.country}</div>
                        <div className="date">{dateBuilder(new Date())}</div>
                    </div>
                    <div className="weather-box">
                        <div className="temp">
                            {Math.round(weatherData.main.temp)}°c
                        </div>
                        <div className="weather">{ returnUpperCaseDescription(weatherData.weather[0].description)}</div>
                    </div>
                </div>
            ) : weatherData.message ?
                (
                    <div className="location-box">
                        <div className='location'>
                            <h2 className="error-message">
                                {weatherData.message}
                            </h2>
                        </div>
                    </div>
                )
                : ''}
        </main>
    )
}
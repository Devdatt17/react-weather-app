const api = {
    key: `${process.env.REACT_APP_API_KEY}`,
    base: "https://api.openweathermap.org/data/2.5/"
}

export const SEARCH_TEXT = (text) => {
    return {
        type: 'SEARCH_TEXT',
        text
    }
}

const WEATHER = (weatherData) =>{
    return {
        type: 'WEATHER_DATA',
        weatherData
    }
}

export const WEATHER_DATA = (data) => {
    return (dispatch) => {
        fetch(`${api.base}weather?q=${data}&units=metric&APPID=${api.key}`)
        .then(res=>res.json())
        .then(result =>{
            dispatch(WEATHER(result))
        })
    }
}
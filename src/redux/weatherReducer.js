export default function weatherReducer(STATE = {},action){
    switch(action.type){
        case 'WEATHER_DATA':
            return {
                ...action.weatherData
            }
        default:
            return STATE
    }
}
const axios = require('axios');

export function updateCityInput(input) {
    return {
        type: 'UPDATE_CITY_NAME',
        payload: { input }
    }
}

export function searchCityWeather(input) {
    return {
        type: 'SEARCH_CITY',
        payload: axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + input + '&APPID=9ab69921920d3fd09542e26861474879' + '&units=imperial')
    }
}

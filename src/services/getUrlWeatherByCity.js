import { API_KEY, URL_BASE, WEATHER } from '../constants/api_url'

const getUrlWeatherByCity = city => `${URL_BASE}${WEATHER}?q=${city}&appid=${API_KEY}`

export default getUrlWeatherByCity

import { api_key, url_base_weather } from '../constants/api_url'

const getUrlWeatherByCity = city => `${url_base_weather}?q=${city}&appid=${api_key}`

export default getUrlWeatherByCity

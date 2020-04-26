import {API_KEY, URL_BASE, FORECAST} from "../constants/api_url";

const getUrlForecastByCity = city => `${URL_BASE}${FORECAST}?q=${city}&appid=${API_KEY}`

export default getUrlForecastByCity

const location = 'Buenos Aires,ar'
const api_key = 'b1a7014557729a3630109631832fdd59'
const url_base_weather = 'http://api.openweathermap.org/data/2.5/weather'
export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`

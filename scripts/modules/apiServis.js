const API_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = 'e533c856036e2cab91e8546f1d50850a';

export const fetchWeather = async (city) => {
    console.log(city)
    try {
        const response = await fetch(`${API_URL}weather?q=${city}&appid=${API_KEY}&lange=ru`)
        if(!response.ok || response.status === 404) {
            throw new Error("Ошибка запроса")
        }
        const data = await response.json()
        return {success: true, data}
    } catch(err) {
        return {success: false, err}
    }
}

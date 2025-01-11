const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export async function getWeatherData(city) {
    try {
        const response = await fetch(
            `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        return {
            city: data.name,
            temperature: Math.round(data.main.temp),
            humidity: data.main.humidity,
            windSpeed: Math.round(data.wind.speed * 3.6), // Convert to km/h
            condition: data.weather[0].main,
            icon: data.weather[0].icon,
        };
    } catch (error) {
        throw new Error(
            error instanceof Error
                ? error.message
                : "Failed to fetch weather data"
        );
    }
}

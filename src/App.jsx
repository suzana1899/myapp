import { useState, useEffect } from "react";
import { SearchBar } from "./components/search-bar";
import { WeatherCard } from "./components/weather-card";
import { getWeatherData } from "./utils/weather";

export default function WeatherDashboard() {
    const [weather, setWeather] = useState(null);
    const [EtWeather, setEtWeather] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // Function to fetch weather data for Ethiopia
    const fetchWeatherForEthiopia = async () => {
        try {
            setLoading(true);
            const data = await getWeatherData("Ethiopia");
            if (data) {
                console.log(data); // Log the fetched data
                setEtWeather(data); // Set the fetched data to EtWeather
            } else {
                setError("No data received for Ethiopia.");
            }
        } catch (err) {
            setError("Failed to fetch weather data for Ethiopia.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWeatherForEthiopia();
    }, []);

    const handleSearch = async (city) => {
        try {
            setLoading(true);
            setError(null);
            const data = await getWeatherData(city);
            setWeather(data);
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : "Failed to fetch weather data"
            );
            setWeather(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="w-full h-screen flex flex-col justify-between items-center bg-gradient-to-b from-blue-50 to-gray-100">
            {/* Hero Section */}
            <section className="w-full mt-10 max-w-4xl bg-white rounded-lg shadow-xl p-8 flex flex-col items-center">
                <h1 className="text-5xl font-extrabold text-center mb-6 text-blue-800">
                    Weather in Ethiopia
                </h1>
                <div className="flex flex-col md:h-[200px] md:flex-row w-full justify-between items-center">
                    <img
                        src="https://tse1.mm.bing.net/th?id=OIP.hnwAd30WuiUi3WhNqEfppwHaE7&rs=1&pid=ImgDetMain"
                        alt="Ethiopian Flag"
                        className="w-[280px] h-auto mb-6 rounded-lg"
                    />
                    {loading ? (
                        <p className="text-lg font-medium text-gray-700 animate-pulse">
                            Loading...
                        </p>
                    ) : error ? (
                        <div
                            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg"
                            role="alert"
                        >
                            <span className="block sm:inline">{error}</span>
                        </div>
                    ) : (
                        EtWeather && <WeatherCard data={EtWeather} />
                    )}
                </div>
            </section>

            {/* Search Bar Section */}
            <div className="w-full max-w-md mt-10">
                <h3 className=" text-pretty text-lg text-center">
                    Search anywhere to get fast weather data
                </h3>
                <SearchBar onSearch={handleSearch} isLoading={loading} />
            </div>

            {/* Render Search Results Below Search Bar */}
            {error && (
                <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                    role="alert"
                >
                    <span className="block sm:inline">{error}</span>
                </div>
            )}
            {weather && <WeatherCard data={weather} />}

            {/* Footer Section */}
            <footer className="mt-12 w-full flex justify-between text-center border-t p-6">
                <p className="text-gray-600 text-sm">
                    © 2025 Weather App. All rights reserved.
                </p>
                <p className="text-gray-500 text-sm">
                    Designed and Developed by{" "}
                    <span className="text-blue-600">Suzana Suleman</span> and{" "}
                    <span className="text-blue-600">
                        <a href="https://github.com/suzana1899">My GitHub</a>
                    </span>
                    .
                </p>
            </footer>
        </main>
    );
}

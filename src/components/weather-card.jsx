import PropTypes from "prop-types";
import { Droplets, Wind } from "lucide-react";

export function WeatherCard({ data }) {
    WeatherCard.propTypes = {
        data: PropTypes.func.isRequired,
    };
    return (
        <div className="w-full mt-3 max-w-sm bg-white shadow-lg rounded-lg">
            <div className="px-4 py-5 sm:p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {data.city}
                </h3>
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                        <img
                            src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
                            alt={data.condition}
                            className="h-16 w-16"
                        />
                        <div>
                            <p className="text-4xl font-bold text-gray-900">
                                {data.temperature}°C
                            </p>
                            <p className="text-gray-500">{data.condition}</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                        <Droplets className="h-5 w-5 text-blue-500" />
                        <span className="text-sm text-gray-600">
                            Humidity: {data.humidity}%
                        </span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Wind className="h-5 w-5 text-blue-500" />
                        <span className="text-sm text-gray-600">
                            Wind: {data.windSpeed} km/h
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

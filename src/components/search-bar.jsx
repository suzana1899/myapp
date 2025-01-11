import { useState } from "react";
import { Search } from "lucide-react";
import PropTypes from "prop-types";

export function SearchBar({ onSearch, isLoading }) {
    SearchBar.propTypes = {
        onSearch: PropTypes.func.isRequired,
        isLoading: PropTypes.bool.isRequired,
    };

    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city) {
            onSearch(city.trim());
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-sm px-2 items-center space-x-2"
        >
            <input
                type="text"
                placeholder="Enter city name..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                disabled={isLoading}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
            >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
            </button>
        </form>
    );
}

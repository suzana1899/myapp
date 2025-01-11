# Weather Dashboard

A simple and responsive weather dashboard application built with React. This application allows users to view the current weather in Ethiopia and search for weather data in other locations.

## Features

-   Displays current weather data for Ethiopia.
-   Search functionality to get weather data for any city.
-   Responsive design using Tailwind CSS.
-   Error handling for failed data fetches.

## Technologies Used

-   **React**: A JavaScript library for building user interfaces.
-   **Tailwind CSS**: A utility-first CSS framework for styling.
-   **JavaScript**: The programming language used for the application logic.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/weather-dashboard.git
    cd weather-dashboard
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

-   Upon loading, the application fetches and displays the current weather in Ethiopia.
-   Use the search bar to enter a city name and retrieve its weather data.
-   The application will display loading indicators and error messages as needed.

## File Structure

/src
├── /components
│ ├── search-bar.jsx
│ └── weather-card.jsx
├── /utils
│ └── weather.js
├── App.jsx
└── App.css
tailwind.config.js
Feel free to modify any sections to better fit your project details or personal preferences!

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

-   Thanks to the creators of React and Tailwind CSS for their amazing tools.
-   Weather data is fetched from a weather API (please specify the API used if applicable).

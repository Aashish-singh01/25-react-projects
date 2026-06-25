# React Weather App

A simple and responsive weather application built with React and Vite. It allows users to search for real-time weather information for any city, utilizing the OpenWeatherMap API.

## Features

- **Real-time Weather Data:** Fetches and displays current temperature, weather description, humidity, and wind speed.
- **City Search:** Allows users to input a city name to get its current weather conditions.
- **Dynamic Display:** The UI updates with the weather information for the searched city.
- **Loading Indicator:** Shows a "Loading..." message while fetching data from the API.
- **Date Display:** Shows the current date.

## Technologies Used

- React
- Vite
- JavaScript
- CSS
- OpenWeatherMap API

---

## 🚀 Live Demo

- **Live Website:** https://weather-app-one-drab-94.vercel.app/

## Setup and Installation

To get this project up and running on your local machine, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/aashish-singh01/25-react-projects.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd 25-react-projects/Weather-app
    ```

3.  **Install the necessary dependencies:**

    ```bash
    npm install
    ```

4.  **Create an Environment File:**
    This project requires an API key from [OpenWeatherMap](https://openweathermap.org/api) to function.
    - Create a `.env` file in the root of the `Weather-app` directory.
    - Add your API key to this file in the following format:
      ```
      VITE_WEATHER_API_KEY=YOUR_API_KEY_HERE
      ```
    - Replace `YOUR_API_KEY_HERE` with your actual OpenWeatherMap API key.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode. Open your browser and navigate to the local URL provided in the terminal (usually `http://localhost:5173`) to see the application.

### `npm run build`

Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run preview`

This command will serve the production build from the `dist` folder, allowing you to preview the final application locally.

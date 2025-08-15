import { useState, useEffect } from "react";
import { WeatherCard } from "./components";

const API_KEY = "a07b201a573237ea8a698bc5d30c9f0a";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const DEFAULT_CITY = "dehli";
const cities = ["dehli", "mumbai", "kolkata", "chennai", "bengaluru", "calcutta", "chandigarh", "dehradun", "jaipur", "lucknow", "pune", "surat", "thiruvananthapuram", "visakhapatnam"];

export default function WeatherPage() {
	const [weather, setWeather] = useState(null);
	const [loading, setLoading] = useState(false);
	const [currentCity, setCurrentCity] = useState(DEFAULT_CITY);


	const cityClickHandler = (city) => {
		setCurrentCity(city);
		fetchWeather();
	}

	const fetchWeather = async () => {
		try {
			setLoading(true);
			const response = await fetch(`${API_URL}?q=${currentCity}&appid=${API_KEY}`);
			const data = await response.json();
			console.log(data);
			setWeather(data);

			if (data.cod === 200) {
				setWeather(data);
			} else {
				setWeather(null);
			}
		} catch (error) {
			console.error("Error fetching weather data:", error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchWeather();
	}, []);

	useEffect(() => {
		fetchWeather();
	}, [currentCity]);

	return (
		<>
			<div className="w-full max-w-md mx-auto flex flex-col gap-4">
				<h1 className="text-2xl font-bold text-center mb-4">
					Display Weather Data
				</h1>
				<div className="flex justify-center gap-4 flex-wrap">
					{cities.map((city) => (
						<button
							key={city}
							onClick={() => cityClickHandler(city)}
							className={`bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 ${currentCity === city ? 'bg-blue-600' : ''}`}
							disabled={loading}
						>
							{city}
						</button>
					))}
				</div>

				<div className="flex flex-col gap-4">
					<input
						type="text"
						placeholder="Enter city name"
						value={currentCity}
						onChange={(e) => setCurrentCity(e.target.value)}
						className="w-full p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
					/>
				</div>
				{loading && <div className="text-center">Loading...</div>}
				{weather && <WeatherCard weatherData={weather} />}
			</div>
		</>
	);
}
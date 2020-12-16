import React, { useState, useEffect } from 'react';
import './Details.css';
import { Link } from 'react-router-dom';
import { WEATHER_API_KEY } from '../../Store/constants';
import { HourlyWeather } from '../HourlyWeather/HourlyWeather';

export const Details = (props) => {
	const cityName = props.match.params.name;
	const currentCityCoord = JSON.parse(localStorage.getItem(cityName)).coord;
	const { lat, lon } = currentCityCoord;
	const [weatherObj, setWeatherObj] = useState({
		current: {
			temp: 0,
			feels_like: 0,
			weather: [
				{
					main: '0',
				},
			],
			wind_speed: 0,
			sunrise: 0,
			sunset: 0,
		},
	});
	const [hourlyTempArr, setHourlyTempArr] = useState([]);
	const getWeatherHourly = async () => {
		const api_url = await fetch(
			`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=dayly&appid=${WEATHER_API_KEY}&units=metric`
		);
		if (api_url.status === 200) {
			const dataJson = await api_url.json();
			setWeatherObj(dataJson);
			setHourlyTempArr(dataJson.hourly);
		}
	};
	useEffect(() => {
		getWeatherHourly();
	}, []);

	return (
		<>
			<div className="details">
				<div className="infoBlock">
					<h2 className="cityNameDetails">{cityName}</h2>
					<p className="weatherDescription">
						<span>Current temperature:</span> {Math.round(weatherObj.current.temp)}°C
					</p>
					<p className="weatherDescription">
						<span>Feels like:</span> {Math.round(weatherObj.current.feels_like)}°C
					</p>
					<p className="weatherDescription">
						<span>Wind speed:</span> {weatherObj.current.wind_speed}m/s
					</p>
					<p className="weatherDescription">{weatherObj.current.weather[0].main}</p>
					<p className="weatherDescription">
						<span>Sunrise time:</span>{' '}
						{new Date(weatherObj.current.sunrise * 1000).toString().substring(15, 24)}
					</p>
					<p className="weatherDescription">
						<span>Sunset time:</span>{' '}
						{new Date(weatherObj.current.sunset * 1000).toString().substring(15, 24)}
					</p>
				</div>
				<Link to="/">
					<button className="backBtn">Back</button>
				</Link>
				<HourlyWeather hourlyTempArr={hourlyTempArr} />
			</div>
		</>
	);
};

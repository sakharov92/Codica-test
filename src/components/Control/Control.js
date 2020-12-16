import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './Control.css';
import { CardList } from '../CardList/CardList';
import { SET_CITY, FILL_SAVED_DATA, UPDATE } from '../../Store/actions/actions';
import { WEATHER_API_KEY } from '../../Store/constants';

export const Control = ({ cityStore, SET_CITY, FILL_SAVED_DATA, UPDATE }) => {
	useEffect(() => {
		updateWeatherData();
		FILL_SAVED_DATA();
	}, []);

	const updateWeatherData = () => {
		for (let i = 0; i < localStorage.length; i++) {
			let cityName = localStorage.key(i);
			(async () => {
				const api_url = await fetch(
					`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${WEATHER_API_KEY}&units=metric`
				);
				if (api_url.status === 200) {
					const dataJson = await api_url.json();
					localStorage.setItem(dataJson.name, JSON.stringify(dataJson));
					UPDATE(dataJson);
				}
			})();
		}
	};
	const getWeather = async (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;
		if (city) {
			e.target.elements.city.value = '';
			const api_url = await fetch(
				`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
			);
			if (api_url.status === 200) {
				const dataJson = await api_url.json();
				SET_CITY(dataJson);
			}
		}
	};
	return (
		<main>
			<form onSubmit={getWeather}>
				<input className="input" type="text" name="city" />
				<input className="submit" type="submit" value="Add City" />
			</form>
			<CardList cityStore={cityStore} />
		</main>
	);
};

export default connect((state) => ({ cityStore: state.cityStore }), { SET_CITY, FILL_SAVED_DATA, UPDATE })(Control);

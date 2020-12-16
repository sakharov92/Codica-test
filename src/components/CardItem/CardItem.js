import React from 'react';
import { connect } from 'react-redux';
import './CardItem.css';
import { Link } from 'react-router-dom';
import { DELETE_CITY, UPDATE } from '../../Store/actions/actions';
import { WEATHER_API_KEY } from '../../Store/constants';

export const CardItem = ({ cityData, DELETE_CITY, UPDATE }) => {
	const deleteComponent = (event) => {
		event.preventDefault();
		event.stopPropagation();
		DELETE_CITY(cityData.name);
		localStorage.removeItem(cityData.name);
	};
	const updateComponent = async (event) => {
		event.preventDefault();
		const api_url = await fetch(
			`http://api.openweathermap.org/data/2.5/weather?q=${cityData.name}&appid=${WEATHER_API_KEY}&units=metric`
		);
		if (api_url.status === 200) {
			const dataJson = await api_url.json();
			UPDATE(dataJson);
			localStorage.setItem(dataJson.name, JSON.stringify(dataJson));
		}
	};

	return (
		<Link to={`/details/${cityData.name}`}>
			<div className="cityItem">
				<h2 className="cityName">{cityData.name}</h2>
				<p>
					<span>Current temp: </span>
					{Math.round(cityData.main.temp)}°C
				</p>
				<p>
					<span>Max temp:</span> {Math.round(cityData.main.temp_max)}°C
				</p>
				<p>
					<span>Min temp:</span> {Math.round(cityData.main.temp_min)}°C
				</p>
				<div className="btnsBLock">
					<button className="btns" onClick={updateComponent}>
						UPDATE
					</button>
				</div>
				<div className="deleteBtn" onClick={deleteComponent}></div>
			</div>
		</Link>
	);
};

export default connect(null, { DELETE_CITY, UPDATE })(CardItem);

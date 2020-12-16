import React from 'react';
import './HourlyWeather.css';
import { DayTemp } from '../DayTemp/DayTemp';

export const HourlyWeather = ({ hourlyTempArr }) => {
	let currentDayArr = [];
	if (hourlyTempArr.length > 0) {
		for (let i = 0; i < 24; i++) {
			currentDayArr.push(
				<div key={new Date() + i * 24}>
					<DayTemp temp={hourlyTempArr[i].temp} hour={i} />
				</div>
			);
		}
	}
	return <div className="hourlyWeatherBlock">{currentDayArr}</div>;
};

import React from 'react';
import './DayTemp.css';

export const DayTemp = ({ temp, hour }) => {
	const tempStyles = {
		transform: `translate(0,${-Math.round(temp) * 4}px)`,
	};
	const hourStyles = {
		transform: `translate(0,${30}px)`,
	};

	return (
		<div className="hourWeather">
			<div className="dayTemp" style={tempStyles}>
				{Math.round(temp)}
			</div>
			<div className="hour" style={hourStyles}>
				{hour}
			</div>
		</div>
	);
};

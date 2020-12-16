import React from 'react';
import './CardList.css';

import CardItem from '../CardItem/CardItem';
export const CardList = ({ cityStore }) => {
	if (cityStore) {
		const cityList = cityStore.map((city) => (
			<li key={new Date() + city.name}>
				<CardItem cityData={city} />
			</li>
		));
		return <ul className="cardList">{cityList} </ul>;
	}
};

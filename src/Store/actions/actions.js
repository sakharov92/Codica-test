import { ADD_CITY, REMOVE_CITY, UPDATE_CITY, FILL_DATA } from '../constants';

export const SET_CITY = (value) => {
	return {
		type: ADD_CITY,
		value,
	};
};

export const DELETE_CITY = (value) => {
	return {
		type: REMOVE_CITY,
		value,
	};
};
export const UPDATE = (value) => {
	return {
		type: UPDATE_CITY,
		value,
	};
};
export const FILL_SAVED_DATA = () => {
	return {
		type: FILL_DATA
	};
};
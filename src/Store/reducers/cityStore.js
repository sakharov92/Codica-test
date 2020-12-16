import { ADD_CITY, REMOVE_CITY, UPDATE_CITY, FILL_DATA } from '../constants';

const cityStore = (state = {}, { type, value }) => {
	switch (type) {
		case ADD_CITY: {
			let newState = Array.from(state);
			for (let i = 0; i < localStorage.length; i++) {
				let key = localStorage.key(i);
				let currentObj = JSON.parse(localStorage.getItem(key));
				if (currentObj.name === value.name) {
					return newState;
				}
			}
			newState.push(value);
			localStorage.setItem(value.name, JSON.stringify(value));
			return newState;
		}
		case FILL_DATA: {
			let newState = [];
			for (let i = 0; i < localStorage.length; i++) {
				let key = localStorage.key(i);
				newState.push(JSON.parse(localStorage.getItem(key)));
			}
			return newState;
		}

		case REMOVE_CITY: {
			let newState = Array.from(state);
			newState = newState.filter((item) => item.name !== value);
			return newState;
		}
		case UPDATE_CITY: {
			let newState = Array.from(state);
			for (let i = 0; i < newState.length; i++) {
				if (newState[i].name === value.name) {
					newState[i] = value;
				}
			}
			return newState;
		}
		default:
			return state;
	}
};
export default cityStore;

import { createStore, compose } from 'redux';
import rootReducer from './rootReducer';

const composeEnhancers =
	process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;
const initialState = {
	cityStore: [],
};
const configureStore = (initialState) => createStore(rootReducer, initialState, composeEnhancers());
const store = configureStore(initialState);
export default store;

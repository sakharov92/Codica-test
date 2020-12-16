import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Store/store';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Control from './components/Control/Control';
import { Details } from './components/Details/Details';

ReactDOM.render(
	<Provider store={store}>
		<HashRouter>
			<App>
				<Switch>
					<Route exact path="/" component={Control} />
					<Route path="/details/:name" component={Details} />
				</Switch>
			</App>
		</HashRouter>
	</Provider>,
	document.getElementById('root')
);

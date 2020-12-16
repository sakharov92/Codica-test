import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
function App({ children }) {
	return (
		<div className="App">
			<Header />
			{children}
			<Footer />
		</div>
	);
}
export default App;

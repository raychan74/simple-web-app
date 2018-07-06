import React from 'react';

import { AppContainer } from './Styles';
import Nav from './Nav';
import Hero from './Hero';
import Product from './Product';
import ProductFeatures from './ProductFeatures';
import Testimonial from './Testimonial';
import Footer from './Footer';

import './App.css';

const App = () => {
	return (
		<AppContainer>
			<Nav />
			<Hero />
			<Product />
			<ProductFeatures />
			<Testimonial />
			<Footer />
		</AppContainer>
	);
};

export default App;

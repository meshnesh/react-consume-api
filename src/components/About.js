import React from 'react';
import { Link } from 'react-router-dom';

//components
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';

export default class About extends React.Component {
	render () {
		return (
			<div>
                <Navigation />
				About Page My N***a
                <Footer />
			</div>
		)
	}
}
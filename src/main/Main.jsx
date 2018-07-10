import React from 'react';
import { Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import IntroContainer from '../pages/intro/IntroContainer';
import SlideShowContainer from '../pages/slide-show/SlideShowContainer';
import './main.css';

// eslint-disable-next-line react/prefer-stateless-function
class Main extends React.Component {
	render() {
		return (
			<main>
				<Route exact path="/" component={IntroContainer} />
				<Route exact path="/slide-show" component={SlideShowContainer} />
			</main>
		);
	}
}

export default hot(module)(Main);

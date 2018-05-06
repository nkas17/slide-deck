import React from 'react';
import { hot } from 'react-hot-loader';
import IntroContainer from '../pages/intro/IntroContainer';
import './main.css';

// eslint-disable-next-line react/prefer-stateless-function
class Main extends React.PureComponent {
	render() {
		return (
			<IntroContainer />
		);
	}
}

export default hot(module)(Main);

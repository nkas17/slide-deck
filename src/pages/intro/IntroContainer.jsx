import React from 'react';
import IntroView from './IntroView';

/**
 * This is the container for the Intro Page.
 *
 * @component IntroContainer
 */
// eslint-disable-next-line react/prefer-stateless-function
class IntroContainer extends React.PureComponent {
	render() {
		return (
			<IntroView />
		);
	}
}
export default IntroContainer;

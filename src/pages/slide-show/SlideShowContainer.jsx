import React from 'react';
import SlideShowView from './SlideShowView';
import slides from './slide-content';

/**
 * This is the container for the Slide Show Page.
 *
 * @component SlideShowContainer
 */
// eslint-disable-next-line react/prefer-stateless-function
class SlideShowContainer extends React.Component {
	render() {
		return <SlideShowView slide={slides[0]} />;
	}
}
export default SlideShowContainer;

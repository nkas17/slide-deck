import React from 'react';
// import PropTypes from 'prop-types';
import SlideView from './SlideView';
import slides from './slide-content';
import './slide.css';

// eslint-disable-next-line react/prefer-stateless-function
class SlideContainer extends React.Component {
	render() {
		return <SlideView slide={slides[0]} />;
	}
}

SlideContainer.propTypes = {};

export default SlideContainer;

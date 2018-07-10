import React from 'react';
// import PropTypes from 'prop-types';
import SlideHeaderView from './SlideHeaderView';
import slides from '../slide/slide-content';

// eslint-disable-next-line react/prefer-stateless-function
class SlideHeaderContainer extends React.Component {
	render() {
		return <SlideHeaderView heading={slides[0].heading} />;
	}
}

SlideHeaderContainer.propTypes = {};

export default SlideHeaderContainer;

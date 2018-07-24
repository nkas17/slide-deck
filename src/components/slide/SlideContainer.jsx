import React from 'react';
import PropTypes from 'prop-types';
import SlideView from './SlideView';
import './slide.css';

// eslint-disable-next-line react/prefer-stateless-function
class SlideContainer extends React.Component {
	render() {
		const { slide } = this.props;
		return <SlideView slide={slide} />;
	}
}

SlideContainer.propTypes = {
	slide: PropTypes.objectOf(PropTypes.any),
};

export default SlideContainer;

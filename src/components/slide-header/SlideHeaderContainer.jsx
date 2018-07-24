import React from 'react';
import PropTypes from 'prop-types';
import SlideHeaderView from './SlideHeaderView';

// eslint-disable-next-line react/prefer-stateless-function
class SlideHeaderContainer extends React.Component {
	render() {
		const { heading } = this.props;
		return <SlideHeaderView heading={heading} />;
	}
}

SlideHeaderContainer.propTypes = {
	heading: PropTypes.string.isRequired,
};

export default SlideHeaderContainer;

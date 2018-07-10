import React from 'react';
import PropTypes from 'prop-types';

const SlideHeaderView = ({ heading }) => (
	<heading className="slide-heading">
		<h3 className="ao-heading-300">{heading}</h3>
	</heading>
);

SlideHeaderView.propTypes = {
	heading: PropTypes.string.isRequired,
};

export default SlideHeaderView;

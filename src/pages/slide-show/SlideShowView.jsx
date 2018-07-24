import React from 'react';
import PropTypes from 'prop-types';
import SlideContainer from '../../components/slide/SlideContainer';
import SlideNavContainer from '../../components/slide-nav/SlideNavContainer';

const SlideShowView = ({ slide }) => (
	<article>
		<div className="row ao-top-32">
			<div className="column">
				<SlideContainer slide={slide} />
				<SlideNavContainer />
			</div>
		</div>
	</article>
);

SlideShowView.propTypes = {
	slide: PropTypes.objectOf(PropTypes.any),
};

export default SlideShowView;

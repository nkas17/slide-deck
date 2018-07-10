import React from 'react';
import SlideContainer from '../../components/slide/SlideContainer';

const SlideShowView = () => (
	<article>
		<div className="row ao-top-32">
			<div className="column">
				<SlideContainer />
			</div>
		</div>
	</article>
);

SlideShowView.propTypes = {};

export default SlideShowView;

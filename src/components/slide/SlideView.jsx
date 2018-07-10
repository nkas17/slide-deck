import React from 'react';
import PropTypes from 'prop-types';
import SlideHeaderContainer from '../slide-header/SlideHeaderContainer';

const SlideView = ({ slide }) => (
	<section className="slide-view ao-contentbox">
		<SlideHeaderContainer />
		<article className="slide-view__content">
			<ul>
				{slide.lines.map(line => <li className="slide-view__item">{line}</li>)}
			</ul>
			<aside className="slide-image column large-2">
				<img
					className="ao-float-left"
					alt="react"
					width={slide.image.width}
					height={slide.image.height}
					src={slide.image.src}
				/>
			</aside>
		</article>
	</section>
);

SlideView.propTypes = {
	slide: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SlideView;

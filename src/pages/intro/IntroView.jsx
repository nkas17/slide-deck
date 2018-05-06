import React from 'react';

/**
 * This is the view for the Intro Page.
 *
 * @component IntroView
 */
const IntroView = () => (
	<main>
		<div className="row ao-top-32">
			<div className="column">
				<div className="ao-contentbox">
					<img className="ao-float-left ao-right-48" alt="react" width="200" height="180" src="./assets/react.png" />
					<h1 className="page-intro ao-top-32">Hello React</h1>
				</div>
			</div>
		</div>
	</main>
);

export default IntroView;

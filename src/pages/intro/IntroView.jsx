import React from 'react';
import { Link } from 'react-router-dom';

/**
 * This is the view for the Intro Page.
 *
 * @component IntroView
 */
const IntroView = () => (
	<article>
		<div className="row ao-top-64">
			<div className="column">
				<section className="ao-contentbox">
					<div className="row ao-top-64">
						<aside className="column large-2">
							<img
								className="ao-float-left"
								alt="react"
								width="150"
								height="130"
								src="./assets/react.png"
							/>
						</aside>
						<section className="column large-8">
							<h1 className="page-intro ao-top-64 ao-align-center">
								Hello Dev Days!
							</h1>
							<h2 className="ao-heading-300 ao-align-center ao-top-48">
								React development with UWM
							</h2>
							<div className="row ao-top-64">
								<div className="column">
									<Link
										to="/slide-show"
										className="ao-button ao-button-primary ao-width-full"
									>
										Let&apos;s Get Started
									</Link>
								</div>
							</div>
						</section>
						<aside className="column large-2">
							<img
								className="ao-float-right ao-bottom-neg-16"
								alt="uwm"
								width="150"
								height="170"
								src="./assets/uwm.png"
							/>
						</aside>
					</div>
				</section>
			</div>
		</div>
	</article>
);

export default IntroView;

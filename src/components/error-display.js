import React from 'react';

import './styles/error-display.css';

export function ErrorDisplay() {
	return(
		<section className="sec error">
			<div className="inner ivory">
				<div className="container">
					<div className="server-error">
						<h2 className="error-header">
					Oops! Something went wrong!
						</h2>
						<p><span className="error-message"><strong>500 Internal Server Error</strong></span>
							<br/>
						Please try loading the page again.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ErrorDisplay;


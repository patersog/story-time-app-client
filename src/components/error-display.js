import React from 'react';

import './styles/error-display.css';

export function ErrorDisplay() {
	return(
		<section className="error-display">
			<div className="error-container">
				<h2 className="error-header">
				Oops! Something went wrong!
				</h2>
				<div className="error-main">
					<p><span><strong>500 Internal Server Error</strong></span>
						<br/>
					Please try loading the page again.
					</p>
				</div>
			</div>
		</section>
	);
}

export default ErrorDisplay;


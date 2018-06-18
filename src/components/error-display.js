import React from 'react';

import './styles/error-display.css';

export function ErrorDisplay() {
	return(
		<div className="error-display">
			<h2 className="error-display-header">
				Oops! Something went wrong!
			</h2>
			<div className="error-display-main">
				<p className="error-message"><span><strong>500 Internal Server Error</strong></span>
					<br/>
					Please try loading the page again.
				</p>
			</div>
		</div>
	);
}

export default ErrorDisplay;


import React from 'react';

import './styles/does-not-exist.css';

export function DoesNotExist() {
	return(
		<div className="does-not-exist">
			<p>Oops! The page your are trying to access does not exist!</p>
		</div>
	);
}

export default DoesNotExist;
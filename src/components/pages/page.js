import React from 'react';
import PropTypes from 'prop-types';

import './styles/page.css';

export function Page(props) {
	return (
		<React.Fragment>
			{props.children}
		</React.Fragment>
	);
}

Page.propTypes = {
	children: PropTypes.any,
};

export default Page;
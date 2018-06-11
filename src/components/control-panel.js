import React from 'react';

import './styles/control-panel.css';

export function ControlPanel(props){
	return(
		<div className="panel-container">
			<h4 className="panel-header">Filters</h4>
			<div className="filters">
				<button className="filter horror">horror</button>
				<button className="filter fantasy">fantasy</button>
				<button className="filter sci-fi">sci-fi</button>
				<button className="filter comedy">comedy</button>
				<button className="filter mystery">mystery</button>
				<button className="filter poetry">poetry</button>
			</div>
		</div>
	);
}

export default ControlPanel;
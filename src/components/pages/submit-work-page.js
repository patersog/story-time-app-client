import React from 'react';

import Page from './page';
import SubmitWorkForm from '../forms/submit-work-form';

import './styles/submit-work-page.css';

export function SubmitWorkPage() {

	return (
		<Page>
			<section className="submit-work">
				<div className="submit-work-container">
					<SubmitWorkForm/>
				</div>
			</section>
		</Page>
	);
}

export default SubmitWorkPage;
import React from 'react';

import Page from './page';
import SubmitWorkForm from '../forms/submit-work-form';

export function SubmitWorkPage() {

	return (
		<Page>
			<section className="submit-work sec">
				<div className="sec-container">
					<SubmitWorkForm title={'submit work'}/>
				</div>
			</section>
		</Page>
	);
}

export default SubmitWorkPage;
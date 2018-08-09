import React from 'react';
import './styles/about.css';

export function About() {
	return(
		<section className="about">
			<div className="inner ivory">
				<div className="abs-scroll">
					<h2 className="about-header">Welcome to Story Time</h2>
					<div className="about-text">
						<p>
							Story time is a platform for writers who foster their confidence and skill, by
							sharing their works with a community of peers, whom are passionate about story telling.
						</p>
						<br/>
						<br/>
						<p>
							As a visitor of our site we want to provide the best possible user experience for you. That being said,
							there are a couple of <strong>rules we strongly recommend</strong> you to abide by when engaging with the community.
						</p>
						<br/>
						<br/>
						<ul className="about-list">
							<li>1. Be <strong>respectful</strong></li>
							<li>2. Be willing to <strong>give and recieve constructive feedback</strong></li>
							<li>3. Be original <strong>Do not copy</strong> and/or claim anyother original work as your own</li>
						</ul>
						<br/>
						<br/>
						<p>Thank you for visiting, we wish you the best!</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
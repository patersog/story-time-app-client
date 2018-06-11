import React from 'react';
import './styles/about.css';

export function About() {
	return(
		<section className="about">
			<h3 className="about-header">Welcome to Story Time</h3>
			<div className="about-text">
				<p>
					Story time is a platform for writers who foster their confidence and skill, by
					sharing their works with a community of peers, whom are passionate about story telling.
				</p>
				<p>
					As a visitor of our site, we want to provide the best possible user experience for you. That being said,
					there are a couple of <strong>rules to abide by when engaging with the community</strong>.
				</p>
				<ul className="about-list">
					<li><div>1. Be respectful</div></li>
					<li>2. Be willing to give and recieve constructive feedback</li>
					<li>3. Do not copy and or claim any original works as your own</li>
				</ul>
				<p>We thank you for using the site, and we wish you the best!</p>
			</div>
		</section>
	);
}

export default About;
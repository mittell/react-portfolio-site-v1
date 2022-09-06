import React from 'react';
import './About.css';

import Award from '../../img/award.png';

const About = () => {
	return (
		<div className='about'>
			<div className='about-left'>
				<div className='about-card bg'></div>
				<div className='about-card'>
					<img
						src='https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
						alt=''
						className='about-img'
					/>
				</div>
			</div>
			<div className='about-right'>
				<h1 className='about-title'>About Me</h1>
				<p className='about-sub'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt,
					placeat? Rum, perferendis.
				</p>
				<p className='about-desc'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
					explicabo rem laudantium esse repellat? Illo repellendus a eius odit,
					consectetur eveniet voluptates, ducimus delectus nihil nulla odio nam
					ratione quae!
				</p>
				<div className='about-award'>
					<img src={Award} alt='Award' className='about-award-img' />
					<div className='about-award-text'>
						<h4 className='about-award-title'>Lorem Ipsum Award 2021</h4>
						<p className='about-award-desc'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Dignissimos, dolorem explicabo. Animi?
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;

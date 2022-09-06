import React from 'react';
import './Contact.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';

const Contact = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className='contact'>
			<div className='contact-bg'></div>
			<div className='contact-wrapper'>
				<div className='contact-left'>
					<h1 className='contact-title'>Get in touch!</h1>
					<div className='contact-info'>
						<div className='contact-info-item'>
							<img src={Phone} alt='Phone' className='contact-icon' />
							+00 123 456 789
						</div>
						<div className='contact-info-item'>
							<img src={Email} alt='Email' className='contact-icon' />
							email@address.com
						</div>
						<div className='contact-info-item'>
							<img src={Address} alt='Phone' className='contact-icon' />
							123 Lorem Ipsum, Dolor Sit Amet, Consectetur, 123 456
						</div>
					</div>
				</div>
				<div className='contact-right'>
					<p className='contact-desc'>
						<strong>Lorem ipsum dolor</strong> sit amet consectetur adipisicing
						elit. Ab architecto at quasi in, accusamus molestiae porro
						asperiores explicabo quas illum.
					</p>
					<form onSubmit={handleSubmit}>
						<input type='text' placeholder='Name' name='Name' />
						<input type='text' placeholder='Subject' name='Subject' />
						<input type='text' placeholder='Email' name='Email' />
						<textarea rows='5' placeholder='Message' name='Message'></textarea>
						<button>Submit</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;

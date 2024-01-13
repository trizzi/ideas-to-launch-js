import React from 'react';
import contact from '../../Assets/Contact.svg';
import text from '../../Assets/contact_me_text.svg';

const Contact = () => {
	return (
		<div name='section4' className='flex text-white'>
			<div className='w-1/2 bg-black p-32'>
				<img src={text} alt='Contact-me-text' />
			</div>
			<div className='w-1/2 bg-black p-24'>
				<img src={contact} alt='' />
			</div>
		</div>
	);
};

export default Contact;

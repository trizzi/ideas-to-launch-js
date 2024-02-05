import React from 'react';
import { Link } from 'react-scroll'
import Text from '../../Assets/Text.svg';
import Profile from '../../Assets/Profile picture.svg'
import Button from '../../Utilities/Button';
import SlideIn from '../../Utilities/SlideIn'

const Showcase = () => {
	const emailAddress = 'info@ideas2launch.com';

	const handleEmailClick = () => {
		window.location.href = `mailto:${emailAddress}`;
	};

	return (
		<div name='section1' className='flex'>
			<div className='flex flex-col md:flex-row justify-between md:container md:mx-auto  items-center py-44 text-white'>
				<div className='px-12'>
					<img src={Text} alt='text' />
					<div className='flex'>
					<input type='text' />
					<Link to='section4'>
					<Button
								text={'Join'} 
							    className='text-white'
								background
								/>
								</Link>
					</div>
					
				</div>
				<SlideIn>
				<div className='md:mx-10 md:my-20 '>
				<div className='hidden md:flex text-white bg-[#29292E] opacity-90 rounded-full p-4 w-fit hover:bg-black'>
                   <img src={Profile} alt="Images" />
				   <a href={`mailto:${emailAddress}`}
								onClick={handleEmailClick} className='pt-3 pl-2'><p>info@ideas2launch.com</p></a>
				</div>
				</div>
				</SlideIn>
				
				
				<div className='my-20 mr-20 lg:hidden'>
				<div className='flex text-white bg-[#29292E] opacity-90 rounded-full p-4 w-fit hover:bg-black'>
                   <img src={Profile} alt="Images" />
				   <a href={`mailto:${emailAddress}`}
								onClick={handleEmailClick} className='pt-3 pl-2'><p>info@ideas2launch.com</p></a>
				</div>
				</div>
				
			</div>
		</div>
	);
};

export default Showcase;

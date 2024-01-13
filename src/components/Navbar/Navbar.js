import React from 'react';
import { Link, Element, Events, animateScroll as scroll } from 'react-scroll';
import SlideDown from '../../Utilities/SlideDown';
import Logo from '../../Assets/ideas-to-launch-logo.svg';
import Button from '../../Utilities/Button';

const Navbar = ({ toggle }) => {
	return (
		<SlideDown className='flex justify-between items-center min-h-0 relative shadow-md container mx-auto'>
			<div className='w-48 p-6'>
				<img src={Logo} alt='ideas-to-launch' />
			</div>
			<div className='cursor-pointer pl-32 pr-1 md:hidden' onClick={toggle}>
				<i className='fas fa-bars'></i>
			</div>
			<div>
				<ul className='pr-8 md:flex hidden space-x-5 lg:space-x-16 items-center text-white'>
				<Link to="section1" smooth={true} duration={500}>Home</Link>
				<Link to="section2" smooth={true} duration={500}>About</Link>
				<Link to="section3" smooth={true} duration={500}>Services</Link>
				<Link to="section4" smooth={true} duration={500}>Contact</Link>
					<Link>
					<Button text={'Join'} background/>
					</Link>
					
				</ul>
			</div>
		</SlideDown>
	);
};

export default Navbar;

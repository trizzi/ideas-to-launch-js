import React from 'react';
import Logo from '../../Assets/ideas-to-launch-logo.svg';

const Navbar = () => {
	return (
		<div className='flex justify-between items-center min-h-0 relative shadow-md font-mulish container mx-auto'>
			<div className='w-48 p-2'>
				<img src={Logo} alt='ideas-to-launch' />
			</div>
			<div>
				<ul className='pr-8 md:flex hidden space-x-5 lg:space-x-16 items-center text-white'>
					<li>Home</li>
					<li>About</li>
					<li>Services</li>
					<li>Contact</li>
					<li className='bg-green'>Join</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;

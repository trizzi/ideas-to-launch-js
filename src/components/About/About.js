import React from 'react';
import { Link } from 'react-scroll'
import aboutLogo from '../../Assets/about-logo.svg';
import text from '../../Assets/IDEAS 2 LAUNCH.svg';
import aboutImage from '../../Assets/about-image.svg';
import Button from '../../Utilities/Button';

const About = () => {
	return (
		<div name='section2' className='flex flex-col sm:flex-row w-full justify-between text-white'>
			<div className='sm:w-1/2' 
				style={{
					backgroundImage: `url(${aboutImage})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					height: '800px',
					backgroundColor: 'rgba(0,0,0,0.9)'}}>
				<div className=' bg-[#29292E] opacity-80 h-[800px]'>
					<div className='flex md:pl-16 pt-24'>
						<div>
							<img src={aboutLogo} alt='about-logo' />
						</div>
						<div>
							<h1>About</h1>
							<img src={text} alt='ideas-2-launch' />
						</div>
					</div>
					<div className='mx-10 md:ml-24'>
						<ul>
							<li>Consulting with purpose</li>
							<li>Bringing ideas to life</li>
						</ul>
					</div>
                    <div className='mx-10 md:ml-24 md:py-8'>
						<h1 className='font-bold pb-4'>
							Do you have a great product idea?
						</h1>
						<p>
							but are unsure how to bring your product to market? Are you a{' '}
							<br />
							manufacturer or an established business looking to ensure your{' '}
							<br />
							products meet its regulatory obligations? If any of these
							scenarios <br />
							describes you then look no further. Ideas 2 launch are expert
							<br />
							consultants in all your research, product development and
							regulatory
							<br />
							needs. We are here to support every aspect of the development
							<br />
							process from ideation to post launch.
						</p>
					</div>
					<div className='md:ml-24 md:my-4 ml-10 mt-8'>
					
						<Link to='section5'>
						<Button text={'Join'} />
					</Link>
					</div>
				</div>
			</div>
			<div
				className='hidden md:block md:visible sm:w-1/2 '
				style={{
					backgroundImage: `url(${aboutImage})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					height: '800px',
					backgroundColor: 'rgba(0,0,0,0.9)',
				}}>
				</div>
				</div>
	);
};

export default About;

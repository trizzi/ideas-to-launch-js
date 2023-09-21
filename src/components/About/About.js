import React from 'react';
import aboutLogo from '../../Assets/about-logo.svg';
import text from '../../Assets/IDEAS 2 LAUNCH.svg';
import aboutImage from '../../Assets/about-image.svg';

const About = () => {
	return (
		<div className='flex justify-between text-white'>
			<div className=' bg-slate-800 w-1/2'>
				<div className='mt-6'>
					<div className='flex'>
						<div>
							<img src={aboutLogo} alt='about-logo' />
						</div>
						<div>
							<h1>About</h1>
							<img src={text} alt='ideas-2-launch' />
						</div>
					</div>
					<div className='ml-24'>
						<ul>
							<li>Consulting with purpose</li>
							<li>Bringing ideas to life</li>
						</ul>
					</div>
					<div className='ml-24'>
						<h1>Do you have a great product idea?</h1>
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
					<div className='ml-24 my-4'>
						<button>Join</button>
					</div>
				</div>
			</div>
			<div
				className='w-1/2'
				style={{
					backgroundImage: `url(${aboutImage})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					height: '800px',
					backgroundColor: 'rgba(0,0,0,0.9)',
				}}></div>
		</div>
	);
};

export default About;

import React from 'react';
import missionImage from '../../Assets/mission-image.svg';
import missionLogo from '../../Assets/about-logo.svg';
import text from '../../Assets/IDEAS 2 LAUNCH.svg';
import Profile from '../../Assets/Profile picture.svg'
import Button from '../../Utilities/Button';
import { useTheme } from '../../context/ThemeContext';

const Mission = () => {
	const { theme } = useTheme();
	return (
		<div name='section3'
			className='flex sm:flex-row w-full justify-between text-white'
			style={{
				backgroundImage: `url(${missionImage})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				height: '800px',
				backgroundColor: 'rgba(0,0,0,0.9)',
			}}>
			<div className='flex'>
				<div className='hidden md:block  w-1/2 md:visible'>
					<img src={missionImage} alt='' className='h-full'/>
				</div>

				<div className='md:mx-48 md:my-24 bg-[#29292E] opacity-90'>
					<div className='flex my-auto pt-24 px-8'>
						<div>
							<img src={missionLogo} alt='mission-logo' />
						</div>
						<div>
							<h1 className='text-white'>Our Mission</h1>
							<img src={text} alt='ideas-2-launch' />
						</div>
					</div>
				
						<div className='max-w-sm mx-8 shadow-md ml-8'>
							<h3 className='font-bold text-xl p-5  text-white'>Our Mission</h3>
							<p className='p-5'>
								Our mission is simple, to provide specialised advice and support
								driving impactful solutions across all stages of the product
								development lifecycle
							</p>

							<span
								className='whitespace-nowrap flex items-center p-5'
								style={{ color: theme.primary }}>
								<Button
								text={'Join'} 
							    className='text-white'
								/>
							</span>
					
					</div>
					<div className='mx-10 my-20 lg:hidden'>
				        <div className='flex text-white bg-[rgb(27,27,31)] opacity-90 rounded-full p-4 w-fit hover:bg-black'>
                             <img src={Profile} alt="Images" />
				             <a href="info@ideas2launch.com" className='pt-3 pl-2'><p>info@ideas2launch.com</p></a>
				</div>
				</div>
				</div>
			</div>
		</div>
	);
};

export default Mission;

import React from 'react';
import missionImage from '../../Assets/mission-image.svg';
import aboutLogo from '../../Assets/about-logo.svg';
import text from '../../Assets/IDEAS 2 LAUNCH.svg';

const Mission = () => {
	return (
		<div
			className=''
			style={{
				backgroundImage: `url(${missionImage})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				height: '800px',
				backgroundColor: 'rgba(0,0,0,0.9)',
			}}>
			<div className='flex'>
				<div className='w-1/2'></div>
				<div className='flex w-1/2 pt-6 px-12'>
					<div>
						<img src={aboutLogo} alt='about-logo' />
					</div>
					<div>
						<h1>Our Mission</h1>
						<img src={text} alt='ideas-2-launch' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Mission;

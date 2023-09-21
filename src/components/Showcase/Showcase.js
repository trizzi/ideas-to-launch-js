import React from 'react';
import Text from '../../Assets/Text.svg';

const Showcase = () => {
	return (
		<div>
			<div className='md:container md:mx-auto flex justify-start items-center py-44'>
				<div>
					<img src={Text} alt='text' />
					<input type='text' />
					<button>Join</button>
				</div>
			</div>
		</div>
	);
};

export default Showcase;

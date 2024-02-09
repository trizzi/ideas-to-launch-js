import React from 'react';

const ServiceItem = ({ service: {text, heading } }) => {
	return (
		<div className='flex flex-col gap-2 group relative text-white rounded-xl mb-20 px-6 py-8 h-[250px] sm:w-[180px] md:w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer group-hover:opacity-50 bg-[#292A3C] opacity-80'>
			<div className=''>
				<h3 className='font-bold text-sm md:text-xl'>{heading}</h3>
			</div>
            <hr className='border-t border-[#44979D] shadow-xl' />
	<ul className='mb-0 list-disc'>
            {
              text.map((items, index) => (
                <li key={index} className='pt-0 text-sm'>{items}</li>
              ))
            }
            <div className='bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100'>
            <i className='fa-solid fa-arrow-up-right text-white'></i>
            </div>
            </ul>
		</div>
	);
};

export default ServiceItem;
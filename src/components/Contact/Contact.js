import React, { useState, useEffect } from 'react';
import contact from '../../Assets/Contact.svg';
import text from '../../Assets/contact_me_text.svg';

const Contact = () => {
	const [isWhatsappVisible, setIsWhatsappVisible] = useState(false);
	const [isLinkedinVisible, setIsLinkedinVisible] = useState(false);
	const [isGmailVisible, setIsGmailVisible] = useState(false);
	const [isFacebookVisible, setIsFacebookVisible] = useState(false);
	const [isInstagramVisible, setIsInstagramVisible] = useState(false);
	// const [isTwitterVisible, setIsTwitterVisible] = useState(false);

	useEffect(() => {
		const whatsappTimeoutId = setTimeout(() => {
			setIsWhatsappVisible(true);
		}, 1000);

		return () => clearTimeout(whatsappTimeoutId);
	}, []);

	useEffect(() => {
		const linkedinTimeoutId = setTimeout(() => {
			setIsLinkedinVisible(true);
		}, 2000);

		return () => clearTimeout(linkedinTimeoutId);
	}, []);

	

	useEffect(() => {
		const gmailTimeoutId = setTimeout(() => {
			setIsGmailVisible(true);
		}, 5000);

		return () => clearTimeout(gmailTimeoutId);
	}, []);

	useEffect(() => {
		const facebookTimeoutId = setTimeout(() => {
			setIsFacebookVisible(true);
		}, 6000);

		return () => clearTimeout(facebookTimeoutId);
	}, []);

	// useEffect(() => {
	// 	const twitterTimeoutId = setTimeout(() => {
	// 		setIsTwitterVisible(true);
	// 	}, 7000);

	// 	return () => clearTimeout(twitterTimeoutId);
	// }, []);

	useEffect(() => {
		const twitterTimeoutId = setTimeout(() => {
			setIsInstagramVisible(true);
		}, 7000);

		return () => clearTimeout(twitterTimeoutId);
	}, []);

	const emailAddress = 'info@ideas2launch.com';

	const handleEmailClick = () => {
		window.location.href = `mailto:${emailAddress}`;
	};

	return (
		<div
			name='section4'
			className='flex flex-wrap md:flex-nowrap text-white w-full'>
			<div className='w-full bg-black p-12 md:p-32'>
				<img
					src={text}
					alt='Contact-me-text'
				/>
			</div>
			<div className='relative w-full bg-black p-12 lg:p-24'>
				<img
					src={contact}
					alt='images'
				/>
				<div
					className={`absolute top-1/4 left-[9%] transform hover:scale-110 transition-transform ${
						isWhatsappVisible ? 'opacity-100' : ''
					} transition-opacity duration-300 bg-green-500 rounded-full p-1 md:p-2`}>
					{/* <a href='#'>
						<i className='fa-brands fa-whatsapp text-white text-2xl md:text-3xl'></i>
					</a> */}
				</div>

				<div
					className={`absolute top-[18%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 hover:rotate-45 transition-transform ${
						isLinkedinVisible ? 'opacity-100' : ''
					} transition-opacity  duration-300 bg-blue-500 rounded-full p-1 md:p-2`}>
					{/* <a href='#'>
						<i className='fa-brands fa-linkedin text-white text-2xl '></i>
					</a> */}
				</div>

			

			

				<div
					className={`absolute top-1/2 left-[10%] transform ${
						isGmailVisible ? 'opacity-100' : ''
					} hover:flip-horizontal duration-300 bg-white rounded-full p-1 md:p-2`}>
					<a
						href={`mailto:${emailAddress}`}
						onClick={handleEmailClick}>
						<i className='fa-brands fa-google text-red-400 text-2xl md:text-3xl'></i>
					</a>
				</div>

				<div
					className={`absolute top-[14%] left-1/3 transform ${
						isFacebookVisible ? 'opacity-100' : ''
					} hover:flip-horizontal duration-300 bg-blue-500 rounded-full p-1 md:p-2`}>
					{/* <a href='#'>
						<i className='fa-brands fa-facebook text-white text-2xl md:text-3xl'></i>
					</a> */}
				</div>

				{/* <div
					className={`absolute top-2/3 left-[84%] md:left-[71%] transform  ${
						isTwitterVisible ? 'opacity-100' : ''
					} hover:animate-bounce bg-sky-500 rounded-full p-1 md:p-2`}>
					<a href='#'>
						<i className='fa-brands fa-twitter text-white text-2xl md:text-3xl'></i>
					</a>
				</div> */}

				<div
					className={`absolute top-2/3 left-[84%] md:left-[71%] transform  ${
						isInstagramVisible ? 'opacity-100' : ''
					} hover:animate-bounce bg-white rounded-full p-1 md:p-2`}>
					<a href='https://www.instagram.com/ideas2launch?igsh=bWQ4MTVkcGcxbjl2&utm_source=qr'>
						<i className='fa-brands fa-instagram text-red-500 text-2xl md:text-3xl'></i>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;

import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const Button = ({ time, text, background, size, refs, disable }) => {
	const { theme } = useTheme();

	const variants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};

	return (
		<motion.button
			className={`
        rounded-md py-2 lg:py-2 px-5 whitespace-nowrap hover:bg-emerald-300
        ${size && size} ${disable && 'opacity-40 cursor-wait'}`}
			style={{
				backgroundColor: `${
					background ? theme.primary.green : theme.secondary.grey
				}`,
				color: `${background ? theme.textcolor.light : theme.current}`,
				border: '2px solid ' + theme.primary.green,
			}}
			ref={refs}
			disabled={disable}
			initial='hidden'
			animate='visible'
			variants={variants}
			transition={{ delay: time || 2 }}>
			{text}
		</motion.button>
	);
};

export default Button;

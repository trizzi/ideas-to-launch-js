import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Showcase from './components/Showcase/Showcase';
import About from './components/About/About';
import showcaseImg from './Assets/showcase-image.svg';
import Mission from './components/Mission/Mission';
import Contact from './components/Contact/Contact';

import { useTheme } from './context/ThemeContext';

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const { theme } = useTheme();

	const toggle = () => {
	
		setIsOpen(!isOpen);
		console.log('click');
	};

	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route
						exact
						path='/'
						element={
							<>
								<div
									style={{
										backgroundImage: `url(${showcaseImg})`,
										backgroundRepeat: 'no-repeat',
										backgroundSize: 'cover',
										height: '800px',
										backgroundColor: 'rgba(0,0,0,0.9)',
										color: theme.textcolor.dark,
									}}>
									<Navbar toggle={toggle} />
									<Showcase />
								</div>
								<About />
								<Mission />
								<Contact />
							</>
						}
					/>

					<Route exact path='/about' element={<About />} />
					<Route exact path='/mission' element={<Mission />} />
					<Route exact path='/contact' element={<Contact />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;

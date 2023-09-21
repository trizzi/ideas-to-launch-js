import './App.css';
import Navbar from './components/Navbar/Navbar';
import Showcase from './components/Showcase/Showcase';
import About from './components/About/About';
import showcaseImg from './Assets/showcase-image.svg';
import Mission from './components/Mission/Mission';

function App() {
	return (
		<div className='App'>
			<div
				style={{
					backgroundImage: `url(${showcaseImg})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					height: '800px',
					backgroundColor: 'rgba(0,0,0,0.9)',
				}}>
				<Navbar />
				<Showcase />
			</div>
			<About />
			<Mission />
		</div>
	);
}

export default App;

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Showcase from './components/Showcase/Showcase';
import showcaseImg from './Assets/showcase-image.svg';

function App() {
	return (
		<div
			className='App'
			style={{
				backgroundImage: `url(${showcaseImg})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				height: '800px',
				backgroundColor: 'rgba(0,0,0,0.7)',
			}}>
			<Navbar />
			<Showcase />
		</div>
	);
}

export default App;

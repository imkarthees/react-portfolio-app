import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Project from './pages/Project/Project';

const App = () => {
	return (
		<>
			<div className='app-container'>
				<div className='container'>
					<Navbar />
					<Home />
					<Project />
					<About />
					<Contact />
				</div>
			</div>
		</>
	);
};

export default App;

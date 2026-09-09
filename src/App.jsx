import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Projects from './pages/Projects/Projects';
import AllProjects from './pages/Projects/AllProjects';
import ProjectDetail from './pages/Projects/ProjectDetails';

import Experience from './pages/Experience';
import About from './pages/About';
import Contact from './pages/Contact';

import Footer from './components/Footer';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={
						<>
							<Navbar />
							<Home />
							<Projects />
							<Experience />
							<About />
							<Contact />
							<Footer />
						</>
					}
				/>

				<Route
					path='/projects'
					element={
						<>
							<AllProjects />
							<Footer />
						</>
					}
				/>

				<Route
					path='/projects/:id'
					element={
						<>
							<ProjectDetail />
							<Footer />
						</>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;

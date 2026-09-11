import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Projects from './pages/Projects/Projects';
import AllProjects from './pages/Projects/AllProjects';
import ProjectDetail from './pages/Projects/ProjectDetails';

import Experience from './pages/Experience';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				{/* Home */}
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

				{/* All Projects */}
				<Route
					path='/projects'
					element={
						<>
							<AllProjects />
							<Footer />
						</>
					}
				/>

				{/* Project Details */}
				<Route
					path='/projects/:id'
					element={
						<>
							<ProjectDetail />
							<Footer />
						</>
					}
				/>

				{/* 404 */}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;

import { Link } from 'react-router-dom';
import Heading from '../../components/Heading';
import ProjectCard from '../../components/ProjectCard';
import projects from '../../data/project';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

const AllProjects = () => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}, []);

	return (
		<section id='all-projects' className='container-page'>
			{/* Back to Projects */}
			<Link
				to='/'
				className='mt-8 inline-flex items-center gap-2 text-xs text-secondary-text transition hover:text-accent sm:mt-10'
			>
				<ArrowLeft size={16} />
				Back to Home
			</Link>

			<Heading label='Projects' title='All Projects' />

			<div className='mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
				{projects.map((project) => (
					<ProjectCard key={project.id} {...project} />
				))}
			</div>
		</section>
	);
};

export default AllProjects;

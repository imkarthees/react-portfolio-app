import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import Heading from '../../components/Heading';
import ProjectCard from '../../components/ProjectCard';
import projects from '../../data/project';

const Projects = () => {
	const navigate = useNavigate();

	return (
		<section
			id='projects'
			className='scroll-section container-page px-4 py-0 sm:px-6 sm:py-0 lg:px-8 lg:py-0'
		>
			<Heading label='Projects' title='Top Projects' />

			{/* First 4 Projects */}
			<div className='mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2'>
				{projects.slice(0, 4).map((project) => (
					<ProjectCard key={project.id} {...project} />
				))}
			</div>

			{/* View All */}
			<div className='mt-10 flex justify-center'>
				<Button variant='fill' onClick={() => navigate('/projects')}>
					View all projects
				</Button>
			</div>
		</section>
	);
};

export default Projects;

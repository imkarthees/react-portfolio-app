import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import projects from '../../data/project';

const ProjectDetail = () => {
	const { id } = useParams();

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}, [id]);

	const project = projects.find((item) => String(item.id) === String(id));

	// Project not found
	if (!project) {
		return (
			<section className='container-page'>
				<div className='flex min-h-[50vh] flex-col items-center justify-center text-center'>
					<h1 className='font-serif text-4xl'>Project Not Found</h1>

					<Link
						to='/projects'
						className='mt-6 flex items-center gap-2 text-sm text-accent transition hover:font-semibold'
					>
						<ArrowLeft size={16} />
						Back to Projects
					</Link>
				</div>
			</section>
		);
	}

	return (
		<section id='project-detail' className='container-page '>
			{/* Back to Projects */}
			<div className='mt-8 flex w-full items-center justify-between sm:mt-10'>
				<Link
					to='/'
					className='inline-flex items-center gap-2 border-b border-border pb-2 text-xs text-secondary-text transition hover:text-accent'
				>
					<ArrowLeft size={16} />
					Back to Home
				</Link>

				<Link
					to='/projects'
					className='inline-flex items-center gap-2 border-b border-border pb-2 text-xs text-secondary-text transition hover:text-accent'
				>
					Explore all projects
					<ArrowRight size={16} />
				</Link>
			</div>

			{/* Project Hero */}
			<div className='mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16'>
				{/* Project Information */}
				<div>
					<p className='mb-3 text-xs font-semibold uppercase tracking-wider text-accent'>
						Project {project.id}
					</p>

					<h1 className='max-w-xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl'>
						{project.title}
					</h1>

					<p className='mt-5 max-w-xl text-sm leading-6 text-secondary-text'>
						{project.description}
					</p>
				</div>

				{/* Project Image */}
				<div className='flex w-full justify-center lg:justify-end'>
					<div className='w-full max-w-[500px] overflow-hidden rounded-xl border border-accent/40'>
						<img
							src={project.image}
							alt={project.title}
							className='h-auto w-full object-cover'
						/>
					</div>
				</div>
			</div>

			{/* Divider */}
			<div className='my-12 border-t border-border sm:my-16' />

			{/* Project Overview */}
			<div className='grid grid-cols-1 gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16'>
				{/* Overview */}
				<div>
					<h2 className='font-serif text-2xl sm:text-3xl'>Project Overview</h2>

					<div className='mt-8 space-y-6'>
						<p className='max-w-2xl text-sm leading-6 text-secondary-text'>
							{project.overview || project.description}
						</p>

						{project.details && (
							<p className='max-w-2xl text-sm leading-6 text-secondary-text'>
								{project.details}
							</p>
						)}

						{project.contribution && (
							<p className='max-w-2xl text-sm leading-6 text-secondary-text'>
								{project.contribution}
							</p>
						)}

						{project.highlights?.length > 0 && (
							<div>
								<h3 className='font-serif text-xl sm:text-2xl'>Key Contributions</h3>

								<ul className='mt-5 space-y-3'>
									{project.highlights.map((point, index) => (
										<li
											key={index}
											className='flex gap-3 text-sm leading-6 text-secondary-text'
										>
											<span className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent' />
											<span>{point}</span>
										</li>
									))}
								</ul>
							</div>
						)}
					</div>
				</div>

				{/* Technology Card */}
				<div className='h-fit rounded-xl border border-border p-5'>
					<h3 className='text-sm font-semibold'>Technology</h3>

					<div className='mt-5 flex flex-wrap gap-3'>
						{project.techStack?.map((tech) => (
							<span
								key={tech}
								className='rounded-md border border-border px-3 py-1 text-[10px] text-secondary-text'
							>
								{tech}
							</span>
						))}
					</div>

					<div className='mt-7'>
						<p className='text-[9px] uppercase tracking-wider text-secondary-text'>
							Role
						</p>

						<p className='mt-2 text-sm font-medium'>
							{project.role || 'Full Stack Developer'}
						</p>
					</div>
				</div>
			</div>

			{/* Project Links */}
			{(project.github || project.live) && (
				<div className='mt-10 flex flex-wrap gap-4'>
					{project.github && (
						<a
							href={project.github}
							target='_blank'
							rel='noopener noreferrer'
							className='rounded-full border border-border px-5 py-2 text-sm transition hover:border-accent hover:text-accent'
						>
							GitHub
						</a>
					)}

					{project.live && (
						<a
							href={project.live}
							target='_blank'
							rel='noopener noreferrer'
							className='rounded-full bg-accent px-5 py-2 text-sm text-white transition hover:font-semibold'
						>
							Preview Live Project
						</a>
					)}
				</div>
			)}
		</section>
	);
};

export default ProjectDetail;

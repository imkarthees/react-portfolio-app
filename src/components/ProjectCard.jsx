import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard = ({
	id,
	title,
	description,
	image,
	techStack,
	github,
	live,
}) => {
	const isAvailable = Boolean(github || live);

	return (
		<Link
			to={`/projects/${id}`}
			aria-label={`View ${title} project`}
			className='block h-full w-full'
		>
			<article className='flex h-full w-full flex-col cursor-pointer rounded-[20px] border border-border p-3 transition-colors duration-300 hover:border-accent sm:p-4'>
				{/* Project Image */}
				<div className='relative aspect-[1.25/1] w-full shrink-0 overflow-hidden rounded-xl border-2 border-dotted border-border bg-background'>
					<img src={image} alt={title} className='h-full w-full object-cover' />

					{/* Status Pulse */}
					<span
						className={`absolute top-2.5 right-2.5 h-2 w-2 animate-pulse rounded-full ${
							isAvailable ? 'bg-accent' : 'bg-red-500'
						}`}
					/>
				</div>

				{/* Project Content */}
				<div className='flex flex-1 flex-col px-0.5 pt-4'>
					{/* Title */}
					<div className='flex items-center gap-1.5'>
						<h3 className='font-serif text-sm sm:text-base'>{title}</h3>

						<span className='h-px w-4 shrink-0 bg-accent' />
					</div>

					{/* Description */}
					<p className='mt-3 text-xs leading-5 text-secondary-text'>{description}</p>

					{/* Tech Stack */}
					<div className='mt-3 flex flex-wrap gap-2'>
						{techStack.map((tech) => (
							<span
								key={tech}
								className='rounded-full border border-border px-2 py-1 text-[10px] leading-none sm:text-xs'
							>
								{tech}
							</span>
						))}
					</div>
				</div>

				{/* Arrow */}
				<div className='mt-4 flex justify-end'>
					<span className='text-accent transition-transform duration-300 group-hover:translate-x-1'>
						<ArrowUpRight size={20} strokeWidth={1.5} />
					</span>
				</div>
			</article>
		</Link>
	);
};

export default ProjectCard;

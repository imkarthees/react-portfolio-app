import Heading from '../components/Heading';
import branchBlack from '../assets/images/branch-black.svg';
import branchWhite from '../assets/images/branch-white.svg';

import experience from '../data/experience';

const Experience = () => {
	return (
		<section
			id='experience'
			className='scroll-section container-page px-4 py-10 sm:px-6 sm:py-10 lg:px-8 lg:py-10'
		>
			<Heading label='Career' title='Experience' />

			{/* Experience Branch */}
			<div className='w-full overflow-hidden'>
				{/* Light mode */}
				<img
					src={branchBlack}
					alt='Experience career timeline'
					className='block h-auto w-full max-w-full object-contain dark:hidden'
				/>

				{/* Dark mode */}
				<img
					src={branchWhite}
					alt='Experience career timeline'
					className='hidden h-auto w-full max-w-full object-contain dark:block'
				/>
			</div>

			{/* Experience Timeline */}
			<div className='mt-20 sm:mt-16'>
				{experience.map((item) => (
					<div
						key={item.id}
						className='relative grid grid-cols-1 gap-8 lg:grid-cols-[180px_1fr] mt-10 lg:gap-12'
					>
						{/* Date */}
						<div className='lg:pt-1'>
							<p className='text-sm font-semibold text-accent'>{item.startDate}</p>

							<p className='mt-1 text-sm text-secondary-text'>{item.endDate}</p>
						</div>

						{/* Timeline Content */}
						<div className='relative border-l border-border pl-6 sm:pl-8'>
							{/* Timeline Dot */}
							<span className='absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full border border-accent bg-background' />

							{/* Company */}
							<h3 className='font-serif text-xl sm:text-2xl'>{item.company}</h3>

							{/* Role */}
							<p className='mt-2 text-sm font-semibold text-accent'>{item.role}</p>

							<p className='mt-1 text-xs text-secondary-text'>{item.location}</p>

							{/* Description */}
							<div className='mt-6 space-y-4'>
								{item.description.map((description, index) => (
									<p
										key={index}
										className='max-w-3xl text-sm leading-6 text-secondary-text'
									>
										{description}
									</p>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Experience;

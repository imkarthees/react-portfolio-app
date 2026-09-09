import { useState } from 'react';

import Heading from '../components/Heading';
import AboutCard from '../components/AboutCard';

import roadBlack from '../assets/images/road-black.svg';
import roadWhite from '../assets/images/road-white.svg';

import about from '../data/about';

const tabs = [
	{
		id: 'who',
		label: 'Who am I',
	},
	{
		id: 'education',
		label: 'Education',
	},
	{
		id: 'skills',
		label: 'Skills',
	},
];

const About = () => {
	const [activeTab, setActiveTab] = useState('who');

	return (
		<section
			id='about'
			className='scroll-section container-page px-4 py-10 sm:px-6 sm:py-10 lg:px-8 lg:py-20'
		>
			{/* Heading */}
			<Heading label='Journey' title='About' />

			{/* About Navigation */}
			<div className='mt-8 flex w-full overflow-x-auto border-b border-border'>
				<div className='mx-auto flex min-w-max items-center gap-6 sm:gap-10'>
					{tabs.map((tab) => (
						<button
							key={tab.id}
							type='button'
							onClick={() => setActiveTab(tab.id)}
							className={`
								relative whitespace-nowrap pb-4 text-xs
								transition-all duration-300 sm:text-sm
								${
									activeTab === tab.id
										? 'font-semibold text-primary-text'
										: 'text-secondary-text hover:text-primary-text'
								}
							`}
						>
							{tab.label}

							{activeTab === tab.id && (
								<span className='absolute bottom-0 left-0 h-px w-full bg-accent' />
							)}
						</button>
					))}
				</div>
			</div>

			{/* Who Am I */}
			{activeTab === 'who' && (
				<div className='mt-10 sm:mt-14'>
					<div className='grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.5fr] lg:gap-14'>
						{/* Introduction */}
						<div>
							<p className='max-w-md text-sm leading-6 text-secondary-text'>
								I’m a developer who enjoys solving real-world problems through software.
								I focus on understanding how a system should work before writing code,
								then build it with clean architecture, well-structured APIs, reliable
								data models, and secure access control. I value maintainable code,
								continuous learning, and building solutions that work beyond the
								development environment.
							</p>
						</div>

						{/* Stats */}
						<div className='grid grid-cols-1 border-t border-border sm:grid-cols-3 sm:border-t-0'>
							{about.profile.stats.map((stat) => (
								<div
									key={stat.id}
									className='border-b border-border py-6 sm:border-b-0 sm:border-l sm:px-6 sm:py-2 first:sm:border-l-0'
								>
									<p className='font-serif text-4xl sm:text-5xl'>
										{stat.value}
										<span className='text-accent'>+</span>
									</p>

									<p className='mt-1 max-w-[140px] text-xs leading-5 text-secondary-text'>
										{stat.label}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			)}

			{/* Education */}
			{activeTab === 'education' && (
				<div className='mt-8 sm:mt-12'>
					{/* Road */}
					<div className='w-full overflow-hidden'>
						<img
							src={roadBlack}
							alt='Education journey'
							className='block h-auto w-full object-contain dark:hidden'
						/>

						<img
							src={roadWhite}
							alt='Education journey'
							className='hidden h-auto w-full object-contain dark:block'
						/>
					</div>

					{/* Education Timeline */}
					<div className='relative mx-auto mt-12 max-w-4xl'>
						{/* Timeline Line */}
						<div className='absolute top-0 bottom-0 left-2 w-px bg-border sm:left-1/2 sm:-translate-x-1/2' />

						<div className='flex flex-col gap-12 sm:gap-16'>
							{about.education.map((item, index) => (
								<div
									key={item.id}
									className='relative grid grid-cols-[16px_1fr] gap-6 sm:grid-cols-2 sm:gap-16'
								>
									{/* Timeline Dot */}
									<span className='relative z-10 mt-1.5 h-2.5 w-2.5 rounded-full border border-accent bg-background ring-4 ring-background sm:absolute sm:top-1/2 sm:left-1/2 sm:mt-0 sm:-translate-x-1/2 sm:-translate-y-1/2' />

									{/* Details */}
									<div
										className={`
								${
									index % 2 === 0
										? 'sm:col-start-1 sm:text-right'
										: 'sm:col-start-2 sm:text-left'
								}
							`}
									>
										<p className='text-xs font-medium uppercase tracking-widest text-accent'>
											{item.year}
										</p>

										<h3 className='mt-2 font-serif text-xl sm:text-2xl'>{item.name}</h3>

										<p className='mt-2 text-sm text-secondary-text'>{item.place}</p>

										<p className='mt-1 text-sm text-secondary-text'>{item.grade}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			)}

			{/* Skills */}
			{activeTab === 'skills' && (
				<div className='mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3'>
					{about.skills.map((item) => (
						<AboutCard key={item.id} title={item.title} icons={item.icons} />
					))}
				</div>
			)}
		</section>
	);
};

export default About;

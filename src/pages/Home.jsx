import { useEffect, useState } from 'react';

import illustrationOne from '../assets/images/illustration-one.png';
import illustrationTwo from '../assets/images/illustration-two.png';
import illustrationThree from '../assets/images/illustration-three.png';
import Button from '../components/Button';

const illustrations = [
	{
		src: illustrationOne,
		alt: 'Full stack developer illustration',
		label: 'Full Stack Developer',
		duration: 2000,
	},
	{
		src: illustrationTwo,
		alt: 'Experience illustration',
		label: '1+ Year of Experience',
		duration: 2000,
	},
	{
		src: illustrationThree,
		alt: 'Projects illustration',
		label: '7+ Projects',
		duration: 2000,
	},
];

const Home = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const timer = setTimeout(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % illustrations.length);
		}, illustrations[currentIndex].duration);

		return () => clearTimeout(timer);
	}, [currentIndex]);

	const currentIllustration = illustrations[currentIndex];

	return (
		<main
			id='home'
			className='
				scroll-section
				container-page flex min-h-screen flex-col items-center justify-center
				gap-12 pt-32 pb-12
				sm:pt-36 sm:pb-16
				lg:flex-row lg:items-center lg:justify-between
				lg:gap-10 lg:pt-40 lg:pb-20
			'
		>
			{/* Left Content */}
			<div className='w-full lg:w-1/2'>
				<h1
					className='
    font-serif text-4xl leading-[1.15]
    sm:text-5xl
    lg:text-5xl
  '
				>
					AI is my tool, not my replacement.
					<br />
					<span className='mt-2 inline-block font-sans text-lg leading-relaxed sm:text-xl'>
						I plan, design, and architect — AI helps me build faster.
					</span>
				</h1>
				<p
					className='
						mt-5 max-w-xl text-sm leading-6 text-secondary-text
						sm:mt-6 sm:text-base
					'
				>
					I'm Kartheeswaran — a full-stack developer building custom software with
					React, Node.js, and MySQL. I focus on clean architecture, secure systems,
					and products built to perform in real-world production.
				</p>

				<div className='my-5'>
					<Button
						variant='fill'
						onClick={() =>
							window.open(
								'/pdf/Kartheeswaran_Resume.pdf',
								'_blank',
								'noopener,noreferrer',
							)
						}
					>
						Resume
					</Button>
				</div>
			</div>

			{/* Right Illustration */}
			<div
				className='
					flex w-full flex-col items-center justify-center
					lg:w-1/2
					lg:min-h-[430px]
				'
			>
				<p
					key={`label-${currentIndex}`}
					className='
						mb-4 font-sans text-base font-semibold
						animate-[fadeIn_500ms_ease-in-out]
						sm:text-lg
					'
				>
					{currentIllustration.label}
				</p>

				<div className='flex h-[320px] w-full items-center justify-center sm:h-[360px] lg:h-[380px]'>
					<img
						key={currentIndex}
						src={currentIllustration.src}
						alt={currentIllustration.alt}
						className='
							h-full w-auto max-w-full object-contain
							animate-[fadeIn_500ms_ease-in-out]
						'
					/>
				</div>
			</div>
		</main>
	);
};

export default Home;

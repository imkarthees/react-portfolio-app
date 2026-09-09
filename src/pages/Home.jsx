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
						text-4xl leading-tight font-serif
						sm:text-5xl
						lg:text-5xl
					'
				>
					AI keeps replacing things.
					<br />
					Vision and architecture still need me.
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

				<img
					key={currentIndex}
					src={currentIllustration.src}
					alt={currentIllustration.alt}
					className='
						h-auto w-full max-w-[280px]
						animate-[fadeIn_500ms_ease-in-out]
						sm:max-w-[340px]
						lg:max-w-md
					'
				/>
			</div>
		</main>
	);
};

export default Home;

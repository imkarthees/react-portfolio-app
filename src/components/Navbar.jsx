import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin, FaDribbble } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import Button from '../components/Button';
import Footer from './Footer';

const navLinks = ['Home', 'Projects', 'Experience', 'About', 'Contact'];

const socialLinks = [
	{
		name: 'Mail',
		href: 'mailto:karthees.in@gmail.com',
		icon: <SiGmail size={18} />,
	},
	{
		name: 'Dribbble',
		href: 'https://dribbble.com/yourhandle',
		icon: <FaDribbble size={18} />,
	},
	{
		name: 'LinkedIn',
		href: 'https://linkedin.com/in/yourhandle',
		icon: <FaLinkedin size={18} />,
	},
	{
		name: 'GitHub',
		href: 'https://github.com/yourhandle',
		icon: <FaGithub size={18} />,
	},
];

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('home');
	const observerRef = useRef(null);

	// IntersectionObserver — track which section is in view
	useEffect(() => {
		const sectionIds = navLinks.map((l) => l.toLowerCase());

		// Use a map to track intersection ratios, pick the most-visible one
		const ratioMap = {};
		sectionIds.forEach((id) => (ratioMap[id] = 0));

		const pickActive = () => {
			let maxRatio = 0;
			let winner = activeSection;
			for (const [id, ratio] of Object.entries(ratioMap)) {
				if (ratio > maxRatio) {
					maxRatio = ratio;
					winner = id;
				}
			}
			setActiveSection(winner);
		};

		observerRef.current = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					ratioMap[entry.target.id] = entry.intersectionRatio;
				});
				pickActive();
			},
			{
				// Observe a generous middle band of the viewport
				rootMargin: '-10% 0px -10% 0px',
				threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
			},
		);

		sectionIds.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observerRef.current.observe(el);
		});

		return () => observerRef.current?.disconnect();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Close aside on Escape key
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === 'Escape') {
				setIsOpen(false);
			}
		};

		document.addEventListener('keydown', handleKeyDown);

		return () => document.removeEventListener('keydown', handleKeyDown);
	}, []);

	// Lock body scroll when mobile menu is open
	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : '';

		return () => {
			document.body.style.overflow = '';
		};
	}, [isOpen]);

	return (
		<>
			{/* Desktop Navbar — unchanged layout */}
			<nav
				aria-label='Primary navigation'
				className='fixed top-10 left-1/2 z-50 hidden w-fit -translate-x-1/2 rounded-full border border-border bg-background lg:block'
			>
				<ul className='flex items-center gap-10 p-3 px-10'>
					{navLinks.map((link) => {
						const isActive = activeSection === link.toLowerCase();
						return (
							<li key={link}>
								<a
									href={`#${link.toLowerCase()}`}
									className={`relative cursor-pointer transition hover:text-primary-text${isActive ? ' font-semibold text-primary-text' : ''}`}
								>
									{link}
									{/* Animated underline */}
									<span
										aria-hidden='true'
										className='absolute -bottom-0.5 left-0 block h-[1.5px] w-full origin-left bg-accent transition-transform duration-[280ms] ease-in-out'
										style={{ transform: isActive ? 'scaleX(1)' : 'scaleX(0)' }}
									/>
								</a>
							</li>
						);
					})}
				</ul>
			</nav>

			{/* Tablet + Mobile Header — fixed 70px height, responsive margins, contains the toggle button */}
			<header className='fixed top-4 left-4 right-4 z-[110] h-[70px] rounded-full border border-border bg-background px-4 sm:top-6 sm:left-6 sm:right-6 lg:hidden'>
				<div className='flex h-full items-center justify-between'>
					<h2 className='font-sans uppercase font-semibold'>
						Kartheeswaran<span className='text-accent '>.</span>
					</h2>

					<button
						type='button'
						onClick={() => setIsOpen((prev) => !prev)}
						aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
						aria-expanded={isOpen}
						aria-controls='mobile-menu'
						className=' flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent text-accent transition hover:scale-105'
					>
						{isOpen ? <X size={20} /> : <Menu size={20} />}
					</button>
				</div>
			</header>

			{/* Background Overlay */}
			{isOpen && (
				<div
					className='fixed inset-0 z-[110] bg-black/20 lg:hidden'
					onClick={() => setIsOpen(false)}
					aria-hidden='true'
				/>
			)}

			{/* Right Side Navigation Panel */}
			<aside
				id='mobile-menu'
				className={`
					fixed top-0 right-0 z-[110] flex h-screen w-[80vw] flex-col
					border-l border-border bg-background
					transition-transform duration-300 ease-in-out
					lg:hidden
					${isOpen ? 'translate-x-0' : 'translate-x-full'}
				`}
			>
				<button
					type='button'
					onClick={() => setIsOpen((prev) => !prev)}
					aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
					aria-expanded={isOpen}
					aria-controls='mobile-menu'
					className='absolute top-7 right-10 z-[200] flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent text-accent transition hover:scale-105 sm:top-[37px] sm:right-12'
				>
					{isOpen ? <X size={20} /> : <Menu size={20} />}
				</button>
				{/* Nav links, right-aligned — padding clears the fixed 70px header + its margin */}
				<nav
					aria-label='Mobile navigation'
					className='px-12 my-10 pt-[100px] sm:pt-[110px]'
				>
					<ul className='flex flex-col items-end gap-10'>
						{navLinks.map((link) => {
							const isActive = activeSection === link.toLowerCase();
							return (
								<li key={link}>
									<a
										href={`#${link.toLowerCase()}`}
										onClick={() => setIsOpen(false)}
										className={`relative cursor-pointer text-lg transition hover:text-primary-text${isActive ? ' font-semibold text-primary-text' : ' font-regular'}`}
									>
										{link}
										{/* Animated underline */}
										<span
											aria-hidden='true'
											className='absolute -bottom-0.5 left-0 block h-[1.5px] w-full origin-left bg-accent transition-transform duration-[280ms] ease-in-out'
											style={{ transform: isActive ? 'scaleX(1)' : 'scaleX(0)' }}
										/>
									</a>
								</li>
							);
						})}
					</ul>
				</nav>

				{/* Spacer pushes Resume + footer down */}
				<div className='flex-1' />

				{/* Resume button, right-aligned */}
				<div className='flex justify-end px-8 pb-1'>
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

				{/* Footer: Let's Connect + socials + copyright */}

				<div className='px-8 pb-10 text-center'>
					<Footer />
				</div>
			</aside>
		</>
	);
};

export default Navbar;

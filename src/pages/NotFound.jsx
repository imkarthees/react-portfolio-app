import { Link } from 'react-router-dom';
import Button from '../components/Button';

const NotFound = () => {
	return (
		<main className='flex min-h-screen items-center justify-center px-6'>
			<section className='w-full max-w-2xl text-center'>
				<p className='font-sans text-sm uppercase tracking-[0.25em] text-accent'>
					Error 404
				</p>

				<h1 className='mt-4 font-serif text-6xl leading-none sm:text-8xl'>
					Page not found.
				</h1>

				<p className='mx-auto mt-6 max-w-md text-sm leading-6 text-secondary-text sm:text-base'>
					The page you’re looking for doesn’t exist or may have been moved.
				</p>

				<div className='mt-8 flex justify-center'>
					<Link to='/'>
						<Button variant='fill'>Back to home</Button>
					</Link>
				</div>
			</section>
		</main>
	);
};

export default NotFound;

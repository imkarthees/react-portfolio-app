const Heading = ({ label, title }) => {
	return (
		<div className='w-full border-t border-border pt-3 sm:pt-4'>
			<p className='font-sans text-xs font-semibold uppercase tracking-widest text-accent sm:text-sm'>
				{label}
			</p>

			<h2 className='mt-2 font-serif text-4xl leading-none sm:text-5xl lg:text-6xl'>
				{title}
			</h2>
		</div>
	);
};

export default Heading;

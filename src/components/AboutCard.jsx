const AboutCard = ({ title, icons }) => {
	return (
		<div className='flex min-h-[110px] w-full flex-col items-center justify-center rounded-xl border border-border px-4 py-4'>
			<h3 className='font-sans text-sm font-semibold'>{title}</h3>

			<div className='mt-5 flex flex-wrap items-center justify-center gap-2'>
				{icons.map(({ name, icon: Icon }) => (
					<div
						key={name}
						className='flex items-center gap-2 rounded-md border border-border px-2.5 py-1.5 transition-transform duration-300 hover:scale-105'
						title={name}
					>
						{Icon && <Icon className='text-base' />}

						<span className='text-xs text-secondary-text'>{name}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default AboutCard;

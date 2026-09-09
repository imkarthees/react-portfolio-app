const AboutCard = ({ title, icons }) => {
	return (
		<div className='flex min-h-[110px] w-full flex-col items-center justify-center rounded-xl border border-border px-4 py-4'>
			<h3 className='font-sans text-sm font-semibold'>{title}</h3>

			<div className='mt-5 flex items-center justify-center gap-6'>
				{icons.map(({ name, icon: Icon }) => (
					<Icon
						key={name}
						title={name}
						className='text-2xl transition-transform duration-300 hover:scale-110'
					/>
				))}
			</div>
		</div>
	);
};

export default AboutCard;

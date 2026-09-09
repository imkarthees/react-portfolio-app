const Button = ({
	children,
	variant = 'default',
	className = '',
	...props
}) => {
	const variants = {
		default:
			'border border-accent text-primary-text hover:bg-accent hover:text-white',
		fill: 'border border-accent bg-accent text-white',
	};

	return (
		<button
			type='button'
			className={`
				inline-flex h-11 items-center justify-center
				rounded-full px-5
				font-sans text-sm font-medium
				transition-all duration-300 ease-out
				hover:translate-x-[10px]
				hover:font-bold
				${variants[variant]}
				${className}
			`}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;

import emailjs from '@emailjs/browser';

const sendMail = async ({ name, email, phone, subject, message }) => {
	try {
		const templateParams = {
			name,
			email,
			phone: phone || 'Not provided',
			subject,
			message,
		};

		await emailjs.send(
			import.meta.env.VITE_EMAILJS_SERVICE_ID,
			import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
			templateParams,
			import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
		);

		return {
			success: true,
			error: null,
		};
	} catch (error) {
		return {
			success: false,
			error,
		};
	}
};

export default sendMail;

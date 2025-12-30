import React, { useRef, useState } from 'react';
import './contact.css';
import { LuLinkedin, LuGithub, LuDribbble, LuMail } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import sendMail from '../../utils/mailer';

const Contact = () => {
	const name = useRef(null);
	const gmail = useRef(null);
	const msg = useRef(null);
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const nameVal = name.current.value.trim();
		const emailVal = gmail.current.value.trim();
		const msgVal = msg.current.value.trim();

		if (!nameVal || !emailVal || !msgVal) {
			alert('⚠️ Please fill all fields');
			return;
		}

		setLoading(true);

		const { success, error } = await sendMail({
			name: nameVal,
			email: emailVal,
			message: msgVal,
		});

		setLoading(false);

		if (success) {
			alert(
				"🚀 Got your message! I'll hit you back soon. Thanks for reaching out 🙌"
			);
			name.current.value = '';
			gmail.current.value = '';
			msg.current.value = '';
		} else {
			console.error('Send failed:', error);
			alert('😕 Oops, something went wrong. Try again in a bit?');
		}
	};
	return (
		<div className='contact-container' id='contact'>
			<h1>Contact</h1>
			<p>
				Got a project in mind or just want to say hi? Let's connect! I'm always open
				to new opportunities, collaborations, and creative ideas.
			</p>
			<form onSubmit={handleSubmit}>
				<label>Name:</label>
				<input ref={name} type='text' placeholder='Name' required />
				<label>Gmail:</label>
				<input ref={gmail} type='email' placeholder='Gmail' required />
				<label>Message:</label>
				<textarea ref={msg} placeholder='Message' required />

				<button type='submit' disabled={loading}>
					{loading ? 'Sending...' : 'Send'}
				</button>
			</form>
			<p className='notes'>
				I am always eager to explore new technologies and improve my skills to stay
				ahead in the ever-evolving digital landscape. Let's collaborate and bring
				your ideas to life!
			</p>
			<h3>Let's Connect</h3>
			<div className='social'>
				<button
					type='button'
					onClick={() => (window.location = 'mailto:karthees.in@gmail.com')}
				>
					<LuMail />
				</button>

				<Link target='_blank' to='https://www.linkedin.com/in/mrkarthees'>
					<button type='button'>
						<LuLinkedin />
					</button>
				</Link>
				<Link target='_blank' to='https://github.com/mrkarthees'>
					<button type='button'>
						<LuGithub />
					</button>
				</Link>
				<Link target='_blank' to='https://dribbble.com/mrkarthees'>
					<button type='button'>
						<LuDribbble />
					</button>
				</Link>
			</div>
			<Footer />
		</div>
	);
};

export default Contact;

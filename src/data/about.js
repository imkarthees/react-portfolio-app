import {
	SiJavascript,
	SiTypescript,
	SiHtml5,
	SiTailwindcss,
	SiExpress,
	SiMongodb,
	SiJsonwebtokens,
	SiSwagger,
	SiPostman,
	SiGooglecloud,
	SiSequelize,
	SiUbuntu,
} from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { DiIllustrator } from 'react-icons/di';

import {
	FaJava,
	FaNodeJs,
	FaFigma,
	FaGitAlt,
	FaGithub,
	FaReact,
	FaCss3Alt,
	FaAws,
} from 'react-icons/fa';

const about = {
	// Who Am I
	profile: {
		stats: [
			{
				id: 1,
				value: '6',
				label: 'Professional Projects',
			},
			{
				id: 2,
				value: '1',
				label: 'Year of Experience',
			},
			{
				id: 3,
				value: '7',
				label: 'Projects Delivered',
			},
		],
	},

	// Education
	education: [
		{
			id: 1,
			name: 'Master of Computer Applications (MCA)',
			grade: 'CGPA - 6.1',
			place: 'Virudhunagar Hindu Nadars Senthikumara Nadar College, Tamil Nadu',
			year: '2023 – 2025',
		},
		{
			id: 2,
			name: 'Bachelor of Computer Applications (BCA)',
			grade: 'CGPA - 6.8',
			place: 'Sri Kaliswari College, Tamil Nadu',
			year: '2020 – 2023',
		},
		{
			id: 3,
			name: 'HSLC',
			grade: 'Percentage - 61%',
			place: 'Kshatriya Vidhyasala Higher Secondary School, Tamil Nadu',
			year: '2019 – 2020',
		},
		{
			id: 4,
			name: 'SSLC',
			grade: 'Percentage - 68%',
			place: 'Kshatriya Vidhyasala Higher Secondary School, Tamil Nadu',
			year: '2017 – 2018',
		},
	],

	// Skills
	skills: [
		{
			id: 1,
			title: 'Languages',
			icons: [
				{ name: 'Java', icon: FaJava },
				{ name: 'JavaScript', icon: SiJavascript },
				{ name: 'TypeScript', icon: SiTypescript },
			],
		},

		{
			id: 2,
			title: 'Frontend',
			icons: [
				{ name: 'HTML', icon: SiHtml5 },
				{ name: 'CSS', icon: FaCss3Alt },
				{ name: 'React', icon: FaReact },
				{ name: 'Tailwind CSS', icon: SiTailwindcss },
			],
		},

		{
			id: 3,
			title: 'Backend',
			icons: [
				{ name: 'Node.js', icon: FaNodeJs },
				{ name: 'Express.js', icon: SiExpress },
				{ name: 'JWT', icon: SiJsonwebtokens },
				{ name: 'OAuth', icon: SiGooglecloud },
				{ name: 'RBAC', icon: null },
				{ name: 'ABAC', icon: null },
				{ name: 'RESTful API', icon: null },
				{ name: 'Amazon EC2', icon: FaAws },
				{ name: 'Cloud Deployment', icon: SiUbuntu },
			],
		},

		{
			id: 4,
			title: 'Database',
			icons: [
				{ name: 'MySQL', icon: GrMysql },
				{ name: 'Sequelize ORM', icon: SiSequelize },
				{ name: 'MongoDB', icon: SiMongodb },
			],
		},

		{
			id: 5,
			title: 'Tools',
			icons: [
				{ name: 'Git', icon: FaGitAlt },
				{ name: 'GitHub', icon: FaGithub },
				{ name: 'Swagger', icon: SiSwagger },
				{ name: 'Postman', icon: SiPostman },
			],
		},

		{
			id: 6,
			title: 'Design',
			icons: [
				{ name: 'Figma', icon: FaFigma },
				{ name: 'Adobe Illustrator', icon: DiIllustrator },
			],
		},
	],
};

export default about;

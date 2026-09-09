import sso from '../assets/images/projects/sso.png';
import crackers from '../assets/images/projects/crackers.png';
import tradersAssociation from '../assets/images/projects/traders-association.png';
import cms from '../assets/images/projects/cms.png';
import deceptivereviewdetection from '../assets/images/projects/deceptive-review-detection.png';
import college from '../assets/images/projects/college.png';
import task from '../assets/images/projects/task.png';
import jewellery from '../assets/images/projects/jewellery.png';

const projects = [
	{
		id: 1,
		title: 'Internal Single Sign-On – SSO',

		description:
			'A centralized authentication system enabling unified login across multiple SaaS products through shared tenant, organization, product-access, and user models.',

		image: sso,

		techStack: ['Node.js', 'Express.js', 'TypeScript', 'MySQL', 'JWT', 'Postman'],

		year: '2025',

		role: 'Backend Developer',

		overview:
			'Built a centralized authentication service that enables users to securely access multiple SaaS products with a single login.',

		details:
			'Designed a multi-tenant authentication architecture with shared tenant, organization, user, and product-access models. Implemented JWT-based authentication, token validation, product-level access control, and controlled redirect flows.',

		contribution:
			'Authored 1,000+ lines of SQL migration scripts and migrated live production data into the new schema with zero data loss.',

		highlights: [
			'Participated in architecture discussions with the CEO and team, translating requirements into an ER diagram and multi-tenant database design covering tenant, organization, user, and product-access tables.',

			'Designed a normalized multi-tenant database architecture to support shared tenant, organization, user, and product-access relationships while maintaining data integrity.',

			'Implemented JWT-based authentication with signed token issuance, validation, and expiry handling.',

			'Built product-access control logic to restrict SaaS product usage to authorized tenants and users.',

			'Designed stateless JWT-based sessions to support scalable authentication across distributed product instances.',

			'Contributed to system design decisions covering technology selection, request handling, and server architecture, along with testing and deployment support.',

			'Structured RESTful APIs in Express.js with clear separation of routes, controllers, services, and models.',

			'Validated authentication, token handling, and access-control flows using Postman.',
		],

		github: null,
		live: null,
	},

	// Project 2
	{
		id: 2,
		title: 'Crackers Management System – SaaS',

		description:
			'A multi-tenant SaaS platform for managing products, inventory, and online enquiries, with role-based access control and automated transactional email workflows.',

		image: crackers,

		techStack: [
			'Node.js',
			'Express.js',
			'JavaScript',
			'TypeScript',
			'MySQL',
			'Sequelize',
			'Swagger/TSOA',
		],

		year: '2025',

		role: 'Backend Developer',

		overview:
			'Architected a multi-tenant SaaS backend enabling businesses to manage products, inventory, and customer enquiries through a centralized, role-secured platform.',

		details:
			'Designed a multi-tenant backend architecture using Sequelize ORM with MySQL, supporting RESTful APIs for product, inventory, and enquiry management. Implemented Role-Based Access Control (RBAC) to restrict actions by user role, and documented all APIs using Swagger/TSOA.',

		contribution:
			'Migrated the entire codebase from JavaScript to TypeScript and integrated Swagger/TSOA for auto-generated, type-safe API documentation. Migrated the storefront build tooling from CRA to Vite for faster builds and improved developer experience.',

		highlights: [
			'Architected a multi-tenant SaaS backend with RESTful APIs for product, inventory, and online enquiry management.',
			'Implemented Role-Based Access Control (RBAC) to restrict feature and data access based on user roles.',
			'Migrated the entire codebase from JavaScript to TypeScript for improved type safety and maintainability.',
			'Integrated Swagger/TSOA to auto-generate and maintain up-to-date API documentation.',
			'Migrated storefront build tooling from Create React App (CRA) to Vite, improving build speed and dev workflow.',
			'Built transactional email workflows using Nodemailer and Brevo to automate user invitation flows.',
			'Used Sequelize ORM to manage database models, relationships, and migrations across MySQL.',
		],

		github: null,
		live: null,
	},
	{
		id: 3,
		title: 'Traders Association Management – Mobile App',

		description:
			'A mobile app backend for managing traders association members, events, donations, and check-ins, delivered under a tight 17-day sprint with evolving client requirements.',

		image: tradersAssociation,

		techStack: ['Flutter', 'Node.js', 'Express.js', 'MySQL', 'Firebase'],

		year: '2026',

		role: 'Backend Developer',

		overview:
			'Delivered the backend for a mobile app supporting member management, event management, and donation tracking for a traders association, within a 17-day sprint.',

		details:
			'Built member management and event management modules covering income/expense tracking, polling, and QR-based event check-in. Extended check-in functionality with phone-number-based verification per client request, and implemented a donation management module secured with Role-Based Access Control (RBAC) and integrated with Firebase push notifications.',

		contribution:
			'Managed the delivery team through a 17-day sprint, coordinating around live client demos and shifting requirements while keeping the backend on schedule.',

		highlights: [
			'Coordinated daily delivery priorities with the team to accommodate requirement changes surfaced during live client demos.',
			'Built income and expense tracking within the event module to give organizers financial visibility per event.',
			'Implemented QR-based check-in for events, later adding phone-number verification as an alternate check-in method per client requirement.',
			'Designed a polling feature within event management to support member voting or feedback collection.',
			'Secured the donation management module with RBAC to restrict who can record, view, or manage donations.',
			'Integrated Firebase push notifications to alert members of donation-related and event updates in real time.',
		],

		github: null,
		live: null,
	},

	{
		id: 4,
		title: 'College ERP System - ERP',

		description:
			'A multi-portal ERP system managing attendance, marks, fees, exam setup, and institutional master data with cascading dependency management.',

		image: college,

		techStack: ['React', 'Node.js', 'Express.js', 'MySQL'],

		year: '2025',

		role: 'Backend Developer',

		overview:
			'Built the backend for a multi-portal ERP system covering attendance, marks, fees, exam setup, and institutional master data management.',

		details:
			'Developed institution-related master management modules — program, department, academic year, subject, student, and employee — using cascading dropdown APIs where each selection dynamically fetches dependent data from the next level. Implemented cascading dependency delete, so removing an institution automatically deletes all related records across linked modules.',

		contribution:
			'Built the master management modules and their cascading API logic, along with the dependency-delete system to maintain data integrity across linked records.',

		highlights: [
			'Built a multi-portal ERP covering attendance, marks, fees structure, and exam setup.',
			'Developed institutional master management modules — program, department, academic year, subject, student, and employee — with cascading dropdown APIs.',
			'Designed each dropdown selection to dynamically fetch dependent data from the next linked module in real time.',
			'Implemented cascading dependency delete, ensuring removal of an institution automatically clears all related records across linked modules.',
			'Built Excel bulk import/export functionality to support large-scale data entry and reporting.',
		],

		github: null,
		live: null,
	},

	{
		id: 5,
		title: 'Deceptive Review Detection – AI-Powered E-commerce Platform',

		description:
			'A full-stack e-commerce website with an AI-powered review moderation system that automatically detects deceptive or abusive reviews before they reach buyers.',

		image: deceptivereviewdetection,

		techStack: [
			'MongoDB',
			'Express.js',
			'React.js',
			'Node.js',
			'JWT',
			'Google Gemini 2.5 Flash',
			'Vercel',
		],

		year: '2025',

		role: 'Full Stack Developer',

		overview:
			'Built a full-stack e-commerce platform (MERN stack) with an AI-powered review moderation system using Google Gemini 2.5 Flash to automatically detect and filter deceptive or abusive product reviews.',

		details:
			'Designed a review workflow where only verified buyers can review a purchased product, and each product can be reviewed once. Every review is analyzed by Google Gemini AI using a custom moderation prompt — safe reviews are auto-published, while harmful or deceptive reviews are hidden from customers and routed to an Admin Review Management panel for manual action.',

		contribution:
			'Built the client, admin panel, and backend independently. Implemented JWT-based authentication, the AI moderation pipeline, and admin workflows for approving, warning, or rejecting flagged reviews, including automated email notifications and email-blocking for rejected users.',

		highlights: [
			'Restricted reviews to verified buyers only, with one review allowed per purchased product to prevent fake or duplicate reviews.',
			'Integrated Google Gemini 2.5 Flash with a custom moderation prompt to automatically analyze and classify reviews as safe or harmful.',
			'Built an Admin Review Management panel allowing admins to Approve, Warn, or Reject flagged reviews.',
			'Implemented automated email workflows — warning emails for flagged reviews and rejection notifications with email-blocking to prevent repeat abuse.',
			'Built admin Dashboard and Order Management modules alongside review moderation for full store oversight.',
			'Implemented JWT-based authentication to secure client and admin sessions.',
			'Used MongoDB Atlas for cloud data storage and deployed both client and admin apps on Vercel.',
			'Redesigned the UI/UX to be fully responsive across devices.',
		],

		github: 'https://github.com/mrkarthees/deceptive-review-detection.git',
		live: 'https://deceptive-review-detection-client.vercel.app/',
	},

	{
		id: 6,
		title: 'Construction & Real Estate Management System – CMS',

		description:
			'A service-based CMS built for construction and real estate businesses to manage hierarchical client-project-plot data, delivered across multiple client engagements with varying feature requirements.',

		image: cms,

		techStack: ['React', 'Node.js', 'Express.js', 'JavaScript', 'MySQL'],

		year: '2025',

		role: 'Full Stack Developer',

		overview:
			'Built the backend for a CMS product for construction and real estate businesses, adapted and extended across multiple client engagements with a shared core and client-specific customizations.',

		details:
			'Designed cascading dropdown APIs to navigate hierarchical client-project-plot relationships, and dashboard analytics APIs returning structured JSON for chart/graph visualizations. Implemented multi-image uploads, Excel import/export, HTML-to-PDF generation, and ABAC (Attribute-Based Access Control) to govern edit/delete permissions — with feature variations customized per client requirement.',

		contribution:
			'Built the core CMS backend once and adapted it across multiple client projects, customizing modules and access rules per client while maintaining a shared, reusable foundation.',

		highlights: [
			"Delivered the same CMS core across multiple client engagements, adapting features and workflows to each client's specific requirements.",
			'Designed cascading dropdown APIs to let users drill down through client → project → plot hierarchies without loading unrelated data.',
			'Built dashboard analytics APIs returning structured JSON optimized for chart and graph rendering on the frontend.',
			'Implemented multi-image upload, Excel import/export, and HTML-to-PDF generation to support document-heavy client workflows.',
			'Implemented ABAC to control edit/delete actions based on user attributes, enabling finer-grained, client-specific permission rules than standard RBAC.',
			'Maintained a reusable core architecture that reduced rebuild effort when onboarding a new client with similar requirements.',
		],

		github: null,
		live: null,
	},

	{
		id: 7,
		title: 'Task Management System – Mobile App',

		description:
			'A mobile app for task allocation, team management, and progress tracking with role-specific access and reporting.',

		image: task,

		techStack: ['Flutter', 'Node.js', 'Express.js', 'MySQL'],

		year: '2026',

		role: 'Backend Developer',

		overview:
			'Built the backend for a task management mobile app enabling admins to allocate tasks and track team progress, with role-specific access for members.',

		details:
			'Implemented task allocation, people management, and progress tracking with reporting for both admins and team members. Built Role-Based Access Control (RBAC) so admins have full access to create members, assign tasks, and monitor all activity, while members can only view and update their own allocated tasks.',

		contribution:
			'Built the RBAC permission model based on evolving client requirements, ensuring role-specific data visibility was enforced securely across the application.',

		highlights: [
			'Built task allocation, people management, and progress tracking modules with reporting for admins and team members.',
			'Implemented RBAC so admins can create members, assign tasks, and monitor all team activity.',
			'Restricted member-level access so team members can only view and update their own allocated tasks.',
			'Built a real-time, client-requirement-driven permission model to enforce secure, role-specific data visibility across the app.',
		],

		github: null,
		live: null,
	},

	{
		id: 8,
		title: 'Jewellery Shop Mobile Application',

		description:
			'A mobile app for jewellery inventory, sales, and suspense entry management, with unit calculations and business-rule-driven data integrity.',

		image: jewellery,

		techStack: ['Flutter', 'Node.js', 'Express.js', 'MySQL'],

		year: '2026',

		role: 'Backend Developer',

		overview:
			'Built the backend for a jewellery shop mobile app managing inventory, sales, and suspense entries with unit-based calculations and reporting.',

		details:
			'Developed inventory, sales, and suspense entry management with unit calculations, Excel import/export, and report generation. Implemented complex business rule logic to maintain data integrity across suspense and sales records.',

		contribution:
			'Analyzed real-world client requirements to identify and resolve dependency conflicts across linked suspense and sales records, using AI tools as a reference assistant during solution research.',

		highlights: [
			'Developed inventory, sales, and suspense entry management modules with unit-based calculations.',
			'Built Excel import/export and report generation for inventory and sales data.',
			'Designed business rule logic to maintain data integrity between linked suspense and sales records.',
			'Identified and resolved dependency conflicts across linked records through client requirement analysis and logical problem-solving.',
		],

		github: null,
		live: null,
	},
];

export default projects;

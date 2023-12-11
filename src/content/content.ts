export const name = "Thiago Mota CV"
export const designation = "Fullstack developer"
export const location = "Campinas, São Paulo"

const about = "I'm really into technology and currently studying web development to kickstart my career. I love problem-solving and enjoy taking on new challenges. If you have any cool projects or freelance opportunities, don't hesitate to reach out!"

const certificates = [
	{
		issued: "2023",
		title: "Java OOP",
		org: "Alura + Oracle",
		url: "https://cursos.alura.com.br/degree/certificate/cbf7b5bc-6848-4eca-af88-7b13efa3e4b8",
		description: "Completed 6 training courses with an estimated workload of 70 hours.",
	},
	{
		issued: "2023",
		title: "Entrepreneurship",
		org: "Alura + Oracle",
		url: "https://cursos.alura.com.br/degree/certificate/63f71a8c-a16a-4fab-9036-43efb35a6d6d",
		description: "Completed 6 training courses with an estimated workload of 46 hours.",
	},

	{
		issued: "2023",
		title: "Entrepreneurship",
		org: "Alura + Oracle",
		url: "https://cursos.alura.com.br/degree/certificate/63f71a8c-a16a-4fab-9036-43efb35a6d6d",
		description: "Completed 6 training courses with an estimated workload of 46 hours.",
	},

	{
		issued: "2023",
		title: "Javascript + HTML",
		org: "Alura + Oracle",
		url: "https://cursos.alura.com.br/user/thiagomot-santos/course/javascript-logica-programacao-javascript-html/certificate?lang=en",
		description: "Javascript and HTML: Develop a game and practice programming logic.",	
	},

	{
		issued: "2023",
		title: "SQL + MYSQL",
		org: "Alura + Oracle",
		url: "https://cursos.alura.com.br/user/thiagomot-santos/course/sql-mysql-manipule-dados-com-sql/certificate?lang=en",
		description: "SQL with MYSQL: Manipulate and Query data.",	
	},	
]


export const education = [
	{
		from: "2019",
		to: "2021",
		institute: "Puc Campinas",
		course: "Computer engineering",
		location: "Campinas, São Paulo",
		status: "Incomplete"
	},
	
]


const openSource = [
	{
		cover_image: "https://www.sinnples.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&w=640&q=75",
		description: "Application that allows users in an apartment complex to recommend services to each other.",
		title: "Sinnples",
		url: "https://github.com/finntechnologies/sinnples",
		postType: "github"
	},
	{
		cover_image: "https://cdn.discordapp.com/attachments/859483678082072616/1183574072752353340/image.png?ex=6588d440&is=65765f40&hm=c07bca4903b26645cdf7a908721815ff6026fcc0e78957c9a2b071882b444154&",
		description: "Application to make QRCODE pix quickly and practically",
		title: "Pagarmepix",
		url: "https://github.com/Thiago-Mota-Santos/pagarmepix",
		postType: "github"
	}
]

const projects = [
	{
		cover_image: "https://camo.githubusercontent.com/98b2a66093f2bf585d77cd47fbf91226cb3a30643e2d5f4e667530e2181efcad/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3835393438333637383038323037323631362f313133383834333330393336343735363438302f734e65487566542e706e67",
		title: "Appointment Graphic",
		description: "Project that simulates a scheduling control panel for a graphic. Where can you manage appointments",
		url: "https://github.com/Thiago-Mota-Santos/fullstack-relay",
		postType: "github",
	},
	{
		cover_image: "https://classic.exame.com/wp-content/uploads/2021/09/Solana-1.jpg?quality=70&strip=info&w=1024",
		title: "Solana Pay Shop",
		description: "An online store where you can download my favorite arts for coins",
		url: "https://github.com/Thiago-Mota-Santos/Solana-pay-shop",
		postType: "github",
	},
	{
		cover_image: "https://images.unsplash.com/photo-1584091377126-3817650725fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
		title: "Mini Notification Service",
		description: "A notification service, using some architectural principles built with Nest and Prisma.",
		url: "https://github.com/Thiago-Mota-Santos/Miniservice-notification",
		postType: "github",
	}
]

export { projects, openSource, about, certificates }
<script lang="ts">
	const jobs = [
		{
			dateRange: "Oct 2021 - Jul 2022",
			title: "Senior Frontend Engineer",
			company: "Gemini",
			intro: "",
			points: [
				"Senior Frontend Engineer for the Nifty Gateway platform",
				"Developed using React, TypeScript, Python, and Django for a web3 NFT marketplace",
				"Led overhaul of primary marketing pages for NFT drops",
				"Contributed to code reviews and building best practices for the team",
				"In the first month, built marketing pages and purchase logic for $91m Pak NFT sale, largest NFT sale in history and largest ever art sale by a living creator"
			]
		},
		{
			dateRange: "Jun 2021 - Oct 2022",
			title: "Software Engineer",
			company: "Walt Disney Co.",
			intro: "",
			points: [
				"Employed by Disney as part of the Hulu Ad Experience team",
				"Developed internal tools using React, TypeScript, and SCSS",
				"Interfaced with multiple APIs by leveraging a Node.js GraphQL server",
				"Created UI components with Storybook",
				"Wrote unit tests with React Testing Library",
				"Managed product backlog with an agile team"
			]
		},
		{
			dateRange: "Sep 2020 - Jun 2021",
			title: "Full-Stack Developer",
			company: "TEKSystems",
			intro: "",
			points: [
				"Developed a website with another developer that was associated with a 2021 Super Bowl commercial - received more than 1m views and 250k signups",
				"Primary developer on blog built with React, Next.js, and Contentful delivered ahead of schedule and under budget, leading to additional enhancements from the client",
				"Used Contentful libraries in React to handle custom content types to increase flexibility for users",
				"Used SCSS Modules to create well-scoped React component styles, supplemented with theming",
				"Developed dashboard platform using React, TypeScript, and Material Design",
				"Utilized latest React tools and patterns, such as the Context API, Lazy/Suspense, and React Hooks",
				"Developed style guide/templates for client w/  HTML, SCSS, JavaScript, and Grunt, deployed to AWS S3"
			]
		},
		{
			dateRange: "Dec 2019 - Sep 2020",
			title: "Full-Stack Developer",
			company: "Ten24 Digital Solutions",
			intro: "",
			points: [
				"Actively developed new e-commerce solutions for clients using AngularJS, ColdFusion, and Mura",
				"Acted as lead for support requests from existing clients and helped triage, estimate, and assign tasks, as well as solved problems using AngularJS, ColdFusion, and Mura",
				"Wrote SQL queries to modify large amounts of production data when a code solution was not feasible, such as product imports and widespread price changes",
				"Conduced code review and facilitated development and production pushes for 10+ client repositories",
				"Technical lead for two clients; helped engineer solutions and acted as a liaison for the development team",
				"Volunteered to wireframe a checkout redesign for client, resulting in more team flexibility and larger budget",
				"Contributed to codebase for custom e-commerce product using AngularJS and ColdFusion"
			]
		},
		{
			dateRange: "Nov 2018 - Dec 2019",
			title: "Full-Stack Developer",
			company: "Sinoc, Inc.",
			intro: "",
			points: [
				"Developed product launch using WordPress and AWS that sold out in apx three weeks",
				"Led five-person agile team and also acted as product owner",
				"Gave speech in Singapore about blockchain and real estate",
				"Architected and designed front end of a real estate crowdfunding platform using React, Apollo, and GraphQL",
				"Architected back end of real estate crowdfunding platform using Python (Django) and PostgreSQL; assisted with the development of smart contracts for blockchain transactions",
				"Managed two interns and taught them React, Python, and how to work in the SDLC",
				"Led collaborative research project with the University of Texas on developing a stable cryptocurrency",
				"Acted as technical point of contact for multiple vendors and advisors in the US, Europe, and Asia"
			]
		},
		{
			dateRange: "May 2018 - Sep 2018",
			title: "Web Engineer",
			company: "NICABM",
			intro: "",
			points: [
				"Led team of four in rebuild of 200+ page WordPress website on AWS using HTML, CSS, JavaScript, jQuery, and PHP and deployed on AWS",
				"Technical lead  for existing 1,000+ member blog; Developed and led  another 500+ member site",
				"Built ~15 landing and order pages weekly w/ $100k avg revenue using HTML, CSS, JavaScript, and jQuery",
				"Customized WordPress theme using PHP",
				"Wrote SQL queries to access data for reports",
				"Conducted weekly split tests using AWO and helped drive increased revenue by analyzing the data for significance"
			]
		}
	]
</script>

<section>
	<div class="text-center">
		<h2 class="text-3xl tracking-wide font-extrabold text-primary-800 sm:text-4xl">Work History</h2>
		<p class="mt-3 max-w-2xl px-4 mx-auto text-xl text-primary-800 sm:mt-4">
			These are my most relevant software engineering positions, going back about 4 - 5 years. More information is available <a
				class="text-primary-700 font-bold underline"
				href="https://tmciesco-content.s3.amazonaws.com/img/troy-ciesco-resume.pdf">on my resume</a
			>.
		</p>
	</div>
	<div>
		{#each jobs as job}
			<div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
				<div>
					<p class="text-base font-semibold text-secondary-700 uppercase tracking-wide">{job.dateRange}</p>
					<h3 class="mt-2 text-3xl text-primary-800">
						<span class="font-extrabold">{job.title}</span>,<br /><span class="font-normal">{job.company}</span>
					</h3>
					<!-- <p class="mt-4 text-lg text-primary-800">
						{job.intro}
					</p> -->
				</div>
				<div class="mt-12 lg:mt-0 lg:col-span-2">
					<ul class="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
						{#each job.points as point}
							<li class="flex items-start">
								<span class="ml-4 text-lg leading-6 text-primary-800">{point}</span>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	h3 {
		@apply font-body;
	}
</style>

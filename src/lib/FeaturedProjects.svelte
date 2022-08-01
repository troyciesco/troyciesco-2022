<script lang="ts">
	const projects = [
		{
			title: "Simpli Apts",
			tagline: "Proptech Startup",
			description:
				"A seed-stage startup that helps real estate brokerages and rental properties offer easier unit showings to their prospective renters.",
			image: "https://res.cloudinary.com/tmciesco/image/upload/q_auto:good/c_scale,w_auto/v1632180647/agent_showing_a4154c3725.jpg",
			link: "/",
			tags: ["TypeScript", "React", "Next.js", "Supabase", "Tailwind"]
		},
		{
			title: "Padl CMS",
			tagline: "Content Management System",
			description:
				"A small CMS I originally built for my girlfriend and I to use for our various blog ideas. It draws inspiration from Netlify CMS and includes a Cloudinary media library.",
			image:
				"https://images.unsplash.com/photo-1516739063901-94072f684dfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
			link: "/",
			tags: ["TypeScript", "Sveltekit", "Supabase", "Tailwind"]
		},
		{
			title: "Haus Partay",
			tagline: "Event Planning Webapp",
			description: "A site I created so that my friends and I can plan events without needing to resort to using Facebook.",
			image:
				"https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
			link: "/",
			tags: ["TypeScript", "Sveltekit", "Tailwind"]
		},
		{
			title: "Lord Rhubarb's Moose on the Loose Wildlife Tours",
			tagline: "Fictional Tour Booking Site",
			description: "Fictional wildlife tour company that includes booking for tours and lodging, an ecommerce shop, and a moose mascot!",
			image:
				"https://images.unsplash.com/photo-1602391950852-88bf9be72b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
			link: "/",
			tags: ["TypeScript", "SCSS"]
		},
		{
			title: "100 Days of Birbs",
			tagline: "Photography Portfolio",
			description:
				"My wildlife photography portfolio. The original idea was that I'd just take a birb (bird) picture every day, but I was having fun with it - so now I have a full-fledged portfolio site.",
			image:
				"https://res.cloudinary.com/tmciesco/image/upload/q_auto:good/c_scale,w_auto/v1658173447/100-days-of-birbs/20220710-DSC_0001.jpg",
			link: "/",
			tags: ["TypeScript", "SCSS"]
		},
		{
			title: "Becca's Book Blog",
			tagline: "Blog",
			description: "A blog (connected to the aforementioned Padl CMS) where my girlfriend writes about the books she's reading.",
			image:
				"https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
			link: "/",
			tags: ["TypeScript", "Tailwind"]
		}
	]
</script>

<section class="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
	<div class="relative max-w-7xl mx-auto">
		<div class="text-center">
			<h2 class="text-3xl tracking-wide font-extrabold text-primary-800 sm:text-4xl">Featured Projects</h2>
			<p class="mt-3 max-w-2xl px-4 mx-auto text-xl text-primary-800 sm:mt-4">
				These are some of the coolest things I've worked on over the past few months. Some are solo projects and some involve a small team.
			</p>
		</div>
		<div class="mt-12 max-w-lg mx-auto grid gap-20 lg:grid-cols-3 lg:max-w-none">
			{#each projects as project}
				<div class="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white">
					<div class="flex-shrink-0">
						<img class="h-48 w-full object-cover" src={project.image} alt={project.title} />
					</div>
					<div class="flex-1 p-6 flex flex-col justify-between">
						<div class="flex-1">
							<p class="text-sm font-medium text-secondary-800">
								<span class="hover:underline">{project.tagline}</span>
							</p>
							<span class="block mt-2">
								<p class="text-xl font-semibold text-primary-800">{project.title}</p>
								<p class="mt-3 text-base text-primary-800">
									{project.description}
								</p>
							</span>
						</div>
						<div class="mt-6 flex items-center flex-wrap gap-2">
							{#each project.tags as tag}
								<span class="inline-flex items-center px-3 py-1 rounded-full text-sm bg-secondary-100 text-secondary-800">{tag}</span>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

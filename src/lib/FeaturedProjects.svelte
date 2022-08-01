<script lang="ts">
	const projects = [
		{
			title: "Simpli Apts",
			tagline: "Proptech Startup",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
			image:
				"https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
			link: "/",
			tags: ["TypeScript", "React", "Next.js", "Supabase", "Tailwind"]
		},
		{
			title: "Padl CMS",
			tagline: "Content Management System",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
			image:
				"https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
			link: "/",
			tags: ["TypeScript", "Sveltekit", "Supabase", "Tailwind"]
		},
		{
			title: "Haus Partay",
			tagline: "Event Planning Webapp",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
			image:
				"https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
			link: "/",
			tags: ["TypeScript", "Sveltekit", "Tailwind"]
		},
		{
			title: "Lord Rhubarb's Moose on the Loose Wildlife Tours",
			tagline: "Fictional Tour Booking Site",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
			image:
				"https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
			link: "/",
			tags: ["TypeScript", "SCSS"]
		},
		{
			title: "100 Days of Birbs",
			tagline: "Photography Portfolio",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
			image:
				"https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
			link: "/",
			tags: ["TypeScript", "SCSS"]
		},
		{
			title: "Becca's Book Blog",
			tagline: "Blog",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
			image:
				"https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
			link: "/",
			tags: ["TypeScript", "Tailwind"]
		}
	]
</script>

<section class="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
	<div class="relative max-w-7xl mx-auto">
		<div class="text-center">
			<h2 class="text-3xl tracking-wide font-extrabold text-gray-900 sm:text-4xl">Featured Projects</h2>
			<p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
				These are some of the coolest things I've worked on over the past few months. Some are solo projects and some involve a small team.
			</p>
		</div>
		<div class="mt-12 max-w-lg mx-auto grid gap-20 lg:grid-cols-3 lg:max-w-none">
			{#each projects as project}
				<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
					<div class="flex-shrink-0">
						<img class="h-48 w-full object-cover" src={project.image} alt={project.title} />
					</div>
					<div class="flex-1 bg-white p-6 flex flex-col justify-between">
						<div class="flex-1">
							<p class="text-sm font-medium text-green-600">
								<a href="/" class="hover:underline">{project.tagline}</a>
							</p>
							<a href="/" class="block mt-2">
								<p class="text-xl font-semibold text-gray-900">{project.title}</p>
								<p class="mt-3 text-base text-gray-500">
									{project.description}
								</p>
							</a>
						</div>
						<div class="mt-6 flex items-center flex-wrap gap-2">
							{#each project.tags as tag}
								<span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">{tag}</span>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

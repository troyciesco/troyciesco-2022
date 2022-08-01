<script lang="ts">
	const jobs = [
		{
			dateRange: "Oct 2021 - Jul 2022",
			title: "Senior Frontend Engineer",
			company: "Gemini",
			intro: "Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec."
		},
		{
			dateRange: "Jun 2021 - Oct 2022",
			title: "Software Engineer",
			company: "Walt Disney Co.",
			intro: "Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec."
		},
		{
			dateRange: "Sep 2020 - Jun 2021",
			title: "Full-Stack Developer",
			company: "TEKSystems",
			intro: "Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec."
		},
		{
			dateRange: "Dec 2019 - Sep 2020",
			title: "Full-Stack Developer",
			company: "Ten24 Digital Solutions",
			intro: "Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec."
		},
		{
			dateRange: "Nov 2018 - Dec 2019",
			title: "Full-Stack Developer",
			company: "Sinoc, Inc.",
			intro: "Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec."
		},
		{
			dateRange: "May 2018 - Sep 2018",
			title: "Web Engineer",
			company: "NICABM",
			intro: "Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec."
		}
	]
</script>

<section>
	<div class="text-center">
		<h2 class="text-3xl tracking-wide font-extrabold text-gray-900 sm:text-4xl">Work History</h2>
		<p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
			These are my most relevant software engineering positions, going back about 4 - 5 years. More information is available <a
				class="text-blue-600 font-bold underline"
				href="https://tmciesco-content.s3.amazonaws.com/img/troy-ciesco-resume.pdf">on my resume</a
			>.
		</p>
	</div>
	<div class="bg-white">
		{#each jobs as job}
			<div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
				<div>
					<p class="text-base font-semibold text-green-600 uppercase tracking-wide">{job.dateRange}</p>
					<h3 class="mt-2 text-3xl text-gray-900">
						<span class="font-extrabold">{job.title}</span>,<br /><span class="font-normal">{job.company}</span>
					</h3>
					<p class="mt-4 text-lg text-gray-500">
						{job.intro}
					</p>
				</div>
				<div class="mt-12 lg:mt-0 lg:col-span-2">
					<ul class="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
						<li class="flex items-start">
							<!-- Heroicon name: outline/check -->
							<svg
								class="w-24 text-green-500"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
							</svg>
							<span class="ml-4 text-lg leading-6 text-gray-900"
								>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro quod excepturi rerum minus commodi odio vitae iusto
								accusamus repellat error?</span>
						</li>

						<li class="flex items-start">
							<!-- Heroicon name: outline/check -->
							<svg
								class="w-24 text-green-500"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
							</svg>
							<span class="ml-4 text-lg leading-6 text-gray-900"
								>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro quod excepturi rerum minus commodi odio vitae iusto
								accusamus repellat error?</span>
						</li>

						<li class="flex items-start">
							<!-- Heroicon name: outline/check -->
							<svg
								class="w-24 text-green-500"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
							</svg>
							<span class="ml-4 text-lg leading-6 text-gray-900"
								>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro quod excepturi rerum minus commodi odio vitae iusto
								accusamus repellat error?</span>
						</li>

						<li class="flex items-start">
							<!-- Heroicon name: outline/check -->
							<svg
								class="w-24 text-green-500"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
							</svg>
							<span class="ml-4 text-lg leading-6 text-gray-900"
								>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro quod excepturi rerum minus commodi odio vitae iusto
								accusamus repellat error?</span>
						</li>

						<li class="flex items-start">
							<!-- Heroicon name: outline/check -->
							<svg
								class="w-24 text-green-500"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
							</svg>
							<span class="ml-4 text-lg leading-6 text-gray-900"
								>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro quod excepturi rerum minus commodi odio vitae iusto
								accusamus repellat error?</span>
						</li>

						<li class="flex items-start">
							<!-- Heroicon name: outline/check -->
							<svg
								class="w-24 text-green-500"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
							</svg>
							<span class="ml-4 text-lg leading-6 text-gray-900"
								>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro quod excepturi rerum minus commodi odio vitae iusto
								accusamus repellat error?</span>
						</li>
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

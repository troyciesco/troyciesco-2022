<script>
	import image from "$lib/assets/t-and-b.jpg"
</script>

<section class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
	<p class="mb-8 py-24 max-w-4xl text-2xl text-primary-800 lg:mx-auto leading-relaxed">
		Welcome to my site! The TL;DR is I started coding seriously in 2014 and I've been lucky enough to work in a lot of different
		environments - startups, local businesses, contracting, big companies you've heard of (Disney/Hulu), and crypto.
	</p>
	<div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
		<div class="relative lg:row-start-1 lg:col-start-2">
			<div class="relative text-base mx-auto max-w-prose lg:max-w-none">
				<figure>
					<div class="aspect-w-12 aspect-h-7 lg:aspect-none">
						<img class="rounded-lg shadow-lg object-cover object-center" src={image} alt="Troy and Becca" width="1184" height="1376" />
					</div>
					<figcaption class="mt-3 flex text-sm text-primary-700">
						<span class="ml-2">I'm on the right!</span>
					</figcaption>
				</figure>
			</div>
		</div>
		<div class="mt-8 lg:mt-0">
			<div class="text-base max-w-prose mx-auto lg:max-w-none">
				<p class="mb-8 max-w-4xl text-lg text-primary-800 lg:mx-auto leading-relaxed">
					I'm a full-stack engineer, but I tend to work on the frontend more than the backend. I've done a lot with React and TypeScript on
					the frontend, and I work with Node.js or Python on the backend. I find trying new technologies regularly - like GraphQL or the
					aforementioned Svelte - keeps things interesting.
				</p>
				<p class="mb-8 max-w-4xl text-lg text-primary-800 lg:mx-auto leading-relaxed">
					In my spare time I enjoy watching baseball, playing video games, hiking, and driving up and down the East Coast.
				</p>
				<p class="mb-2 max-w-4xl text-lg text-primary-800 lg:mx-auto leading-relaxed">Some career highlights include:</p>
				<ul class="pl-4 mb-8 max-w-4xl text-lg text-primary-800 lg:mx-auto list-disc leading-relaxed">
					<li class="leading-relaxed mb-2">
						Building marketing pages and purchase logic for the <a
							class="text-primary-700 font-bold underline"
							href="https://niftygateway.com/collections/pakmerge">$91m Pak NFT sale</a
						>, the largest NFT sale in history and largest ever art sale by a living creator (as of this writing in June 2022)
					</li>
					<li class="leading-relaxed mb-2">
						Building a site that was associated with a Super Bowl commerical that received more than 1m page views and 250k signups
					</li>
					<li class="leading-relaxed mb-2">
						Leading a team of four to overhaul a Wordpress website for a $10m/yr company that provides <a
							class="text-primary-700 font-bold underline"
							href="https://nicabm.com">training for mental health professionals</a>
					</li>
					<li class="leading-relaxed mb-2">
						Writing <a
							class="text-primary-700 font-bold underline"
							href="https://medium.com/@tmciesco/the-burrito-method-of-task-estimation-973df97509bb">this article</a> about how a scrum team
						can think about estimating tasks. 🌯 🌯 🌯
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>

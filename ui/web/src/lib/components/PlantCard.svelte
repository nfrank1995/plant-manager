<script lang="ts">	
    import { getImageLink } from '$lib/images';
    import type { ImageKey } from '$lib/images';

    export let name = "plant-name"
    export let description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident eveniet eligendi cumque consequatur tempore sint nisi sapiente. Iste beatae laboriosam iure molestias cum expedita architecto itaque quae rem."
    export let imageKey: ImageKey =  'YOErFW8AfkI'

</script>


		<a class="card card-hover overflow-hidden" href="/elements/cards">
			<header>
				<img src={getImageLink({id: imageKey})} class="bg-black/50 w-full aspect-[21/12]" alt="Post" />
			</header>
			<div class="p-4 space-y-4">
				<h3 class="h3" data-toc-ignore>{name}</h3>
				<article>
					<p>
						<!-- cspell:disable -->
						{description}
						<!-- cspell:enable -->
					</p>
				</article>
			</div>
		</a>
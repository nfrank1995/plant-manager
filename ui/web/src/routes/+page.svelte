<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">
	import PlantCard  from '$lib/components/PlantCard.svelte'
	import type { ImageKey } from '$lib/images'

	let plants = [
		{
			name: "Peace lily", 
			description:"With glossy green leaves and bright white flowers, the peace lilies are excellent at removing toxins and allergens from the air.", 
			imageKey:"YOErFW8AfkI" as ImageKey
		},
		{
			name: "Aglaonema", 
			description:"Another plant that thrives on neglect, most aglaonema (aka Chinese evergreen) can survive low-light conditions.", 
			imageKey:"8vKVlNIbAc4" as ImageKey
		},
		{
			name: "Rubber plant", 
			description:"Ficus elastica, the rubber fig, rubber bush, rubber tree, rubber plant, or Indian rubber bush, Indian rubber tree, is a species of flowering plant in the family Moraceae, native to eastern parts of South and Southeast Asia.", 
			imageKey:"z_X0PxmBuIQ" as ImageKey
		},
		{
			name: "English ivy", 
			description:"Dracaena trifasciata is a species of flowering plant in the family Asparagaceae, native to tropical West Africa from Nigeria east to the Congo.", 
			imageKey:"vjUokUWbFOs" as ImageKey
		}
	]
</script>

<div class="container mx-auto flex">
	<div class="w-full text-token grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each plants as plant}
			<PlantCard {...plant}/>
		{/each}
	</div>
</div>

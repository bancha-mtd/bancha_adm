<script lang="ts">
	import BoldText from "../../atoms/texts/BoldText.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import PageSelectorLayout from "../../layouts/PageSelectorLayout.svelte";

	export let curPage: number;
	export let maxPage: number;
	export let rangeMin: number;
	export let rangeMax: number;
</script>

<PageSelectorLayout>
	{#each [...Array(rangeMax + 1 - rangeMin).keys()].map((i) => i + rangeMin) as page}
		{#if page === curPage}
			<BoldText>{page}</BoldText>
		{:else if page < maxPage}
			<Text>{page}</Text>
		{:else}
			<Text />
		{/if}
	{/each}
</PageSelectorLayout>

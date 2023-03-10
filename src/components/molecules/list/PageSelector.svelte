<script lang="ts">
	import PageTextButton from "../../atoms/buttons/PageTextButton.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import PageSelectorLayout from "../../layouts/PageSelectorLayout.svelte";

	export let curPage: number;
	export let maxPage: number;
	export let rangeMin: number;
</script>

<PageSelectorLayout>
	{#if 1 < rangeMin}
		<PageTextButton
			onClick={() => {
				curPage = rangeMin - 10;
				rangeMin = curPage;
				console.log(curPage, rangeMin);
			}}
			>〈
		</PageTextButton>
	{/if}
	{#each [...Array(10).keys()].map((i) => i + rangeMin) as page}
		{#if page === curPage}
			<PageTextButton
				onClick={() => {
					curPage = page;
				}}
				fontWeight={true}>{page}</PageTextButton
			>
		{:else if page < maxPage}
			<PageTextButton
				onClick={() => {
					curPage = page;
				}}>{page}</PageTextButton
			>
		{:else}
			<Text />
		{/if}
	{/each}
	{#if rangeMin + 10 < maxPage}
		<PageTextButton
			onClick={() => {
				curPage = rangeMin + 10;
				rangeMin = curPage;
				console.log(curPage, rangeMin);
			}}>〉</PageTextButton
		>
	{/if}
</PageSelectorLayout>

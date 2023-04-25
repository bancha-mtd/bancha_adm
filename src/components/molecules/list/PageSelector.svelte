<script lang="ts">
	import PageTextButton from "../../atoms/buttons/PageTextButton.svelte";
	import PageSelectorLayout from "../../layouts/PageSelectorLayout.svelte";

	export let curPage: number;
	export let maxPage: number;
	export let rangeMin: number;
	export let onClick: (page: number) => void = () => {};
</script>

<PageSelectorLayout>
	{#if 1 < rangeMin}
		<PageTextButton
			onClick={() => {
				onClick(rangeMin - 10);
				rangeMin -= 10;
			}}
			>〈
		</PageTextButton>
	{/if}
	{#each [...Array(10).keys()].map((i) => i + rangeMin) as page}
		{#if page === curPage}
			<PageTextButton onClick={() => onClick(page)} fontWeight={true}
				>{page}</PageTextButton
			>
		{:else if page <= maxPage}
			<PageTextButton onClick={() => onClick(page)}>{page}</PageTextButton>
		{/if}
	{/each}
	{#if rangeMin + 10 < maxPage}
		<PageTextButton
			onClick={() => {
				onClick(rangeMin + 10);
				rangeMin += 10;
			}}>〉</PageTextButton
		>
	{/if}
</PageSelectorLayout>

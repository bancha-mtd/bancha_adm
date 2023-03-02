<script lang="ts">
	import BlackTextButton from "../../atoms/buttons/BlackTextButton.svelte";
	import GreyTextButton from "../../atoms/buttons/GreyTextButton.svelte";

	export let title: string;
	export let menus: string[];
	export let startIdx: number;
	export let selected: number;

	let span = true;
</script>

<div>
	<BlackTextButton
		text={title}
		onClick={() => {
			span = !span;
		}}
	/>
	<div style="display:{span ? 'none' : 'flex'}">
		{#each menus as menu, i}
			<GreyTextButton
				text={menu}
				onClick={() => {
					selected = i + startIdx;
				}}
				selected={startIdx + i == selected ? "selected" : ""}
			/>
		{/each}
	</div>
</div>

<style>
	div {
		flex-direction: column;
		gap: 10px;
	}
</style>

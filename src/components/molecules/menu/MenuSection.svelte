<script lang="ts">
	import { push } from "svelte-spa-router";
	import BlackTextButton from "../../atoms/buttons/BlackTextButton.svelte";
	import GreyTextButton from "../../atoms/buttons/GreyTextButton.svelte";
	import { selected } from "../../stores/MenuStore";

	export let title: string;
	export let menus: string[];
	export let routers: string[];
	export let startIdx: number;

	let height =
		startIdx <= $selected && $selected < startIdx + menus.length
			? (menus.length * 38).toString()
			: "0";
</script>

<div class="section">
	<BlackTextButton
		text={title}
		onClick={() => {
			height = height === "0" ? (menus.length * 38).toString() : "0";
		}}
	/>
	<div style="height:{height}px" class="list">
		{#each menus as menu, i}
			<GreyTextButton
				text={menu}
				onClick={() => {
					$selected = i + startIdx;
					push(routers[i]);
				}}
				selected={startIdx + i == $selected ? "selected" : ""}
			/>
		{/each}
	</div>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		overflow: hidden;
		transition: all 0.3s linear;
	}
	.section {
		margin-top: 20px;
	}
</style>

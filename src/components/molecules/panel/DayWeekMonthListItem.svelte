<script lang="ts">
	import DarkGreyText from "../../atoms/texts/DarkGreyText.svelte";

	export let type: string;
	export let value: number;
</script>

<li>
	<DarkGreyText text={type} />
	<DarkGreyText text="{value}건" />
</li>

<style>
	li {
		list-style: none;
		display: flex;
		justify-content: space-between;
		padding: 0 8px 0 8px;
	}
</style>

<script lang="ts">
	import DarkGreyText from "../../atoms/texts/DarkGreyText.svelte";
	export let type: string;
	export let value: number;
</script>

<li>
	<DarkGreyText>{type}</DarkGreyText>
	<DarkGreyText>{value}건</DarkGreyText>
</li>

<style>
	li {
		list-style: none;
		display: flex;
		justify-content: space-between;
		padding: 0 8px 0 8px;
	}
</style>

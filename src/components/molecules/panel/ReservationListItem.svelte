<script lang="ts">
	import DarkGreyText from "../../atoms/texts/DarkGreyText.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";

	export let head: boolean = false;
	export let title: string;
	export let date: string;
	export let count: string;
	export let price: string;
</script>

<ListItemLayout {head}>
	<DarkGreyText width="40%">{title}</DarkGreyText>
	<DarkGreyText width="20%">{date}</DarkGreyText>
	<DarkGreyText width="20%">{count}</DarkGreyText>
	<DarkGreyText width="20%">{price}</DarkGreyText>
</ListItemLayout>

<style>
	li {
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>

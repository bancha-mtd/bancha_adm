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
	<DarkGreyText text={title} width="40%" />
	<DarkGreyText text={date} width="20%" />
	<DarkGreyText text={count} width="20%" />
	<DarkGreyText text={price} width="20%" />
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

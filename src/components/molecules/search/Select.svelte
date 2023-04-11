<script lang="ts">
	import type { SelectType } from "../../utils/Types";

	export let selected: SelectType;
	export let lists: SelectType[];
	export let width: string = "150px";
	export let height: string = "50px";
	export let fontSize: string = "18px";
	export let borderRadius: boolean = false;
</script>

<select
	bind:value={selected}
	style="width:{width};height:{height};font-size:{fontSize};border-radius:{borderRadius
		? '10px'
		: '0px'}"
>
	{#each lists as list}
		<option value={list}>{list.name}</option>
	{/each}
</select>

<style>
	select {
		text-align: center;
		border: 1px solid #ccc;
	}
</style>

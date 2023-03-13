<script lang="ts">
	export let selected: object;
	export let lists: any;
	export let width: string;
</script>

<select bind:value={selected} style="width:{width}">
	{#each lists as list}
		<option value={list}>{list.name}</option>
	{/each}
</select>

<style>
	select {
		height: 30px;
		text-align: center;
		font-size: 16px;
		border: none;
		background-color: transparent;
		border: 1px solid #aaa;
		box-sizing: border-box;
	}
	select option {
		font-size: 10pt;
	}
</style>

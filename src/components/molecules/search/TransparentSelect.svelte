<script lang="ts">
	export let selected: object;
	export let lists;
</script>

<select bind:value={selected}>
	{#each lists as list}
		<option value={list}>{list.name}</option>
	{/each}
</select>

<style>
	select {
		height: 30px;
		text-align: center;
		font-size: 18px;
		border: none;
		background-color: transparent;
		color: #777;
	}
	select option {
		font-size: 10pt;
		color: #777;
	}
</style>

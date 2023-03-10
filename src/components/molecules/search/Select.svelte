<script lang="ts">
	export let selected: object;
	export let lists;
	export let width: string = "150px";
</script>

<select bind:value={selected} style="width:{width}">
	{#each lists as list}
		<option>{list.name}</option>
	{/each}
</select>

<style>
	select {
		height: 50px;
		line-height: 50px;
		text-align: center;
		font-size: 18px;
	}
</style>

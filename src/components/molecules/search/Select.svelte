<script lang="ts">
	export let selected: object;
	export let lists: any;
	export let width: string = "150px";
	export let height: string = "50px";
	export let fontSize: string = "18px";
</script>

<select
	bind:value={selected}
	style="width:{width};height:{height};font-size:{fontSize}"
>
	{#each lists as list}
		<option>{list.name}</option>
	{/each}
</select>

<style>
	select {
		text-align: center;
		border: 1px solid #ccc;
	}
</style>

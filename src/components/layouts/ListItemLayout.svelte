<script lang="ts">
	export let head: boolean = false;
	export let height: string = "50px";
	export let gap: string = "0px";
	let border = "1px solid #ccc";
</script>

<li style="height:{height};border-top:{head ? 'none' : border};gap:{gap}">
	<slot />
</li>

<style>
	li {
		width: 100%;
		display: flex;
		align-items: center;
		list-style: none;
	}
</style>

<script lang="ts">
	export let head: boolean = false;
	export let height: string = "50px";
	let border = "1px solid #ccc";
</script>

<li style="height:{height};border-top:{head ? 'none' : border}">
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

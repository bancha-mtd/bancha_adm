<script lang="ts">
	export let head: boolean;
	let border = "1px solid #ccc";
</script>

<li style="border-top:{head ? 'none' : border}">
	<slot />
</li>

<style>
	li {
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>

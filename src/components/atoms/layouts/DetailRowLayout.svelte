<script lang="ts">
	export let head: boolean = false;
</script>

<div style="border-top:{head ? 'none' : '1px solid #ccc'}">
	<slot />
</div>

<style>
	div {
		box-sizing: border-box;
		width: 100%;
		display: flex;
		align-items: center;
		padding: 10px 20px 10px 20px;
	}
</style>

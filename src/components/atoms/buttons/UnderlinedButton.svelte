<script lang="ts">
	export let onClick: () => void;
	export let width: string;
</script>

<button on:click={onClick} style="width:{width}">
	<slot />
</button>

<style>
	button {
		font-size: 18px;
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>

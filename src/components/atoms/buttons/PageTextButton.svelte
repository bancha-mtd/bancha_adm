<script lang="ts">
	export let onClick: () => void;
	export let fontWeight: boolean = false;
</script>

<button on:click={onClick} style="font-weight:{fontWeight ? '700' : '300'}">
	<slot />
</button>

<style>
	button {
		font-size: 18px;
		font-weight: 700;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>

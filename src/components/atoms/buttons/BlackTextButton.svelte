<script lang="ts">
	export let text: string;
	export let onClick: () => void;
</script>

<button on:click={onClick}>
	{text}
</button>

<style>
	button {
		font-size: 18px;
		width: 200px;
		padding: 0 20px 0 20px;
		text-align: start;
	}
</style>

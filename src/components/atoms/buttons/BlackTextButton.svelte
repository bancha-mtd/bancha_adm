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
		height: 38px;
		line-height: 30px;
		padding: 4px 20px 4px 20px;
		text-align: start;
	}
</style>

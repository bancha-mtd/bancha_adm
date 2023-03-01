<script lang="ts">
	export let onClick: () => void;
	export let text: string;
	export let width: string;
	export let height: string;
</script>

<button on:click={onClick} style="width:{width};height:{height}">
	{text}
</button>

<style>
	button {
		background-color: #a5a5a5;
		color: white;
		border-radius: 10px;
		text-align: center;
		line-height: 50px;

		font-size: 20px;
	}
</style>

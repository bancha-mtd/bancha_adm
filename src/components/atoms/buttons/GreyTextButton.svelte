<script lang="ts">
	export let text: string;
	export let onClick: () => void;
	export let selected: string;
</script>

<button on:click={onClick} class={selected}>
	{text}
</button>

<style>
	button {
		color: #aaaaaa;
		font-size: 16px;
		width: 200px;
		height: 38px;
		line-height: 30px;
		padding: 4px 20px 4px 40px;
		text-align: start;
	}
	button:hover {
		background-color: #eeeeee;
		transition: all 0.3s linear;
	}
	.selected {
		background-color: #eeeeee;
	}
</style>

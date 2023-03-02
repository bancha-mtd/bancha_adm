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
		color: #adadad;
		font-size: 18px;
		width: 200px;
		padding: 0 20px 0 40px;
		text-align: start;
	}
	button:hover {
		background-color: #f6f6f6;
		transition: all 0.3s linear;
	}
	.selected {
		background-color: #f6f6f6;
	}
</style>

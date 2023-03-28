<script lang="ts">
	export let onClick: () => void;
	export let selected: string = "";
	export let width: string = "200px";
	export let height: string = "38px";
	export let padding: string = "4px 20px 4px 40px";
</script>

<button
	on:click={onClick}
	class={selected}
	style="width:{width};height:{height};padding:{padding}"
>
	<slot />
</button>

<style>
	button {
		color: #aaaaaa;
		font-size: 16px;
		line-height: 30px;
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

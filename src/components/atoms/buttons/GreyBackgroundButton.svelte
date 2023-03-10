<script lang="ts">
	export let onClick: () => void;
	export let width: string = "70px";
	export let height: string = "50px";
	export let fontSize: string = "20px";
</script>

<button
	on:click={onClick}
	style="width:{width};height:{height};font-size:{fontSize}"
>
	<slot />
</button>

<style>
	button {
		background-color: #aaa;
		color: white;
		border-radius: 10px;
		font-size: 20px;
	}
</style>

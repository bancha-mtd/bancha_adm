<script lang="ts">
	export let onClick: () => void;
	export let width: string = "70px";
	export let height: string = "50px";
	export let fontSize: string = "20px";
	export let type: boolean = false;
</script>

<button
	type={type ? "submit" : "button"}
	on:click={onClick}
	style="width:{width};height:{height};font-size:{fontSize}"
>
	<slot />
</button>

<style>
	button {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #aaa;
		color: white;
		border-radius: 10px;
		font-size: 20px;
	}
</style>

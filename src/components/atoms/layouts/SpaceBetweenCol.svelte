<script lang="ts">
	export let width: string = "auto";
	export let height: string = "auto";
	export let marginBottom: string = "0px";
	export let marginTop: string = "0px";
	export let gap: string = "auto";
</script>

<div
	style="width:{width};height:{height};margin-bottom:{marginBottom};margin-top:{marginTop};gap:{gap};"
>
	<slot />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>

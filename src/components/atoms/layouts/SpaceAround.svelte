<script lang="ts">
	export let marginBottom: string = "0px";
	export let marginTop: string = "0px";
	export let gap: string = "auto";
	export let width: string = "auto";
</script>

<div
	style="width:{width};margin-bottom:{marginBottom};margin-top:{marginTop};gap:{gap};"
>
	<slot />
</div>

<style>
	div {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
</style>

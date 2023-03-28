<script lang="ts">
	export let marginBottom: string = "0px";
	export let marginTop: string = "0px";
	export let marginRight: string = "0px";
	export let gap: string = "auto";
	export let alignItems: string = "center";
	export let width: string = "auto";
	export let height: string = "auto";
</script>

<div
	style="width:{width};height:{height};margin-bottom:{marginBottom};margin-top:{marginTop};margin-right:{marginRight};gap:{gap};align-items:{alignItems}"
>
	<slot />
</div>

<style>
	div {
		display: flex;
		justify-content: space-between;
	}
</style>

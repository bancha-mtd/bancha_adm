<script lang="ts">
	export let marginBottom: string = "0px";
	export let marginTop: string = "0px";
	export let gap: string = "auto";
	export let alignItems: string = "center";
</script>

<div
	style="margin-bottom:{marginBottom};margin-top:{marginTop};gap:{gap};align-items:{alignItems}"
>
	<slot />
</div>

<style>
	div {
		display: flex;
		justify-content: space-between;
	}
</style>

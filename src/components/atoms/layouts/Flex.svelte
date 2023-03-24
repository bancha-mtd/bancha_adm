<script lang="ts">
	export let marginBottom: string = "0px";
	export let marginTop: string = "0px";
	export let gap: string = "auto";
	export let width: string = "100%";
</script>

<div
	style="margin-bottom:{marginBottom};margin-top:{marginTop};gap:{gap};width:{width}"
>
	<slot />
</div>

<style>
	div {
		display: flex;
	}
</style>

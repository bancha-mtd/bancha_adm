<script lang="ts">
	export let marginBottom: string = "0px";
	export let marginTop: string = "0px";
	export let gap: string = "auto";
</script>

<div style="margin-bottom:{marginBottom};margin-top:{marginTop};gap:{gap};">
	<slot />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
</style>

<script lang="ts">
	export let fontSize: string = "100px";
</script>

<div style="font-size:{fontSize}">
	<slot />
</div>

<style>
	div {
		color: #aaa;
		margin: -30px 0 -30px 0;
		text-align: center;
	}
</style>

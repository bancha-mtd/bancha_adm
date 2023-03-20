<script lang="ts">
	export let fontSize: string = "80px";
	export let marginTop: string = "0px";
</script>

<div style="font-size:{fontSize};margin-top:{marginTop}">
	<slot />
</div>

<style>
	div {
		color: #aaa;
		margin: -30px 0 -30px 0;
		text-align: center;
	}
</style>

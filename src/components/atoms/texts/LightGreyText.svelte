<script lang="ts">
	export let fontSize: string = "18px";
	export let width: string = "auto";
	export let marginLeft: string = "0px";
</script>

<div style="font-size:{fontSize};width:{width};margin-left:{marginLeft}">
	<slot />
</div>

<style>
	div {
		color: #bbbbbb;
		text-align: center;
	}
</style>

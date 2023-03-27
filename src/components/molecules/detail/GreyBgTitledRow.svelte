<script lang="ts">
	import WhiteText from "../../atoms/texts/WhiteText.svelte";

	export let title: string;
	export let width: string = "calc(100%/3)";
	export let height: string = "100px";
</script>

<div class="wrapper" style="width:{width};height:{height}">
	<div class="title" style="height:{height};line-height:{height}">
		<WhiteText fontSize="16px">{title}</WhiteText>
	</div>
	<slot />
</div>

<style>
	.wrapper {
		display: flex;
		gap: 30px;
		align-items: center;
	}
	.title {
		background-color: #aaa;
		width: 130px;
		text-align: center;
	}
</style>

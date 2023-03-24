<script lang="ts">
	import WhiteText from "../../atoms/texts/WhiteText.svelte";

	export let title: string;
	export let width: string = "calc(100%/3)";
</script>

<div class="wrapper" style="width:{width}">
	<div class="title">
		<WhiteText fontSize="16px">{title}</WhiteText>
	</div>
	<slot />
</div>

<style>
	.wrapper {
		height: 100px;
		display: flex;
		gap: 30px;
		align-items: center;
	}
	.title {
		background-color: #aaa;
		width: 130px;
		height: 100px;
		line-height: 100px;
		text-align: center;
	}
</style>

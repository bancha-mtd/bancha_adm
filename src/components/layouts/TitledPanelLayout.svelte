<script lang="ts">
	import Link from "../atoms/links/Link.svelte";
	import BoldText from "../atoms/texts/BoldText.svelte";

	export let title: string;
	export let to: string;
	export let width: string = "auto";
	export let height: string = "auto";
</script>

<section class="panel" style="width: {width};height: {height}">
	<BoldText text={title} />
	<slot />
	<div class="to-detail"><Link text="자세히 보기" {to} /></div>
</section>

<style>
	.panel {
		background-color: white;
		border-radius: 10px;
		padding: 10px 20px 10px 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.to-detail {
		font-size: 16px;
		color: #aaaaaa;
		text-decoration: underline;
		text-align: right;
	}
</style>

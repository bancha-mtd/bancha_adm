<script lang="ts">
	import BorderedInput from "../../atoms/inputs/BorderedInput.svelte";
	import SpaceAround from "../../atoms/layouts/SpaceAround.svelte";
	import GreyText from "../../atoms/texts/GreyText.svelte";

	export let value: string;
	export let type: string = "text";
	export let pre: string;
	export let post: string;
	export let width: string = "150px";
</script>

<SpaceAround gap="4px">
	{#if pre !== ""}<GreyText fontSize="16px">{pre}</GreyText>{/if}
	<BorderedInput {width} {type} bind:value alignCenter={true} />
	{#if post !== ""}<GreyText fontSize="16px">{post}</GreyText>{/if}
</SpaceAround>

<script lang="ts">
	import DetailRowLayout from "../../atoms/layouts/DetailRowLayout.svelte";
	import DetailRowTitle from "../../atoms/texts/DetailRowTitle.svelte";

	export let head: boolean = false;
	export let title: string;
</script>

<DetailRowLayout {head}>
	<DetailRowTitle>
		{title}
	</DetailRowTitle>
	<slot />
</DetailRowLayout>

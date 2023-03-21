<script lang="ts">
	import MainLayout from "../../layouts/MainLayout.svelte";
	import PageLayout from "../../layouts/PageLayout.svelte";
	import PageHeader from "../../molecules/header/PageHeader.svelte";
	import ExhibitionDetail from "../../organisms/exhibition/ExhibitionDetail.svelte";

	export let params: any;
</script>

<MainLayout>
	<PageHeader title="기획전" />
	<PageLayout>
		<ExhibitionDetail itemId={params.id} />
	</PageLayout>
</MainLayout>

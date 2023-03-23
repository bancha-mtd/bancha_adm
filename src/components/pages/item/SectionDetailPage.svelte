<script lang="ts">
	import MainLayout from "../../layouts/MainLayout.svelte";
	import PageLayout from "../../layouts/PageLayout.svelte";
	import PageHeader from "../../molecules/header/PageHeader.svelte";
	import SectionDetail from "../../organisms/section/SectionDetail.svelte";

	export let params: any;
</script>

<MainLayout>
	<PageHeader title="섹션" />
	<PageLayout>
		<SectionDetail itemId={params.id} />
	</PageLayout>
</MainLayout>

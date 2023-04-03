<script lang="ts">
	import MainLayout from "../../layouts/MainLayout.svelte";
	import PageLayout from "../../layouts/PageLayout.svelte";
	import PageHeader from "../../molecules/header/PageHeader.svelte";
	import PointPresetDetail from "../../organisms/point/PointPresetDetail.svelte";

	export let params: any;
</script>

<MainLayout>
	<PageHeader title="포인트" />
	<PageLayout>
		<PointPresetDetail itemId={params.id} />
	</PageLayout>
</MainLayout>

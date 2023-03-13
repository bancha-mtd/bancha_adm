<script lang="ts">
	import MainLayout from "../../layouts/MainLayout.svelte";
	import PageLayout from "../../layouts/PageLayout.svelte";
	import PageHeader from "../../molecules/header/PageHeader.svelte";
	import PointAddPanel from "../../organisms/point/PointAddPanel.svelte";
	import PointList from "../../organisms/point/PointList.svelte";
</script>

<MainLayout>
	<PageHeader title="포인트" />
	<PageLayout>
		<PointAddPanel />
		<PointList />
	</PageLayout>
</MainLayout>

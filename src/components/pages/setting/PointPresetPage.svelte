<script lang="ts">
	import MainLayout from "../../layouts/MainLayout.svelte";
	import PageLayout from "../../layouts/PageLayout.svelte";
	import PageHeader from "../../molecules/header/PageHeader.svelte";
	import PointPresetList from "../../organisms/point/PointPresetList.svelte";
</script>

<MainLayout>
	<PageHeader title="포인트" />
	<PageLayout>
		<PointPresetList />
	</PageLayout>
</MainLayout>

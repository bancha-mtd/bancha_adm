<script>
	import MainLayout from "../layouts/MainLayout.svelte";
	import PageLayout from "../layouts/PageLayout.svelte";
	import PageHeader from "../molecules/header/PageHeader.svelte";
	import MainPanel from "../organisms/main/MainPanel.svelte";
</script>

<MainLayout>
	<PageHeader title="대시보드" />
	<PageLayout>
		<MainPanel />
	</PageLayout>
</MainLayout>

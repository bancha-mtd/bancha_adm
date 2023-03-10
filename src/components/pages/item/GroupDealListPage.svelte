<script lang="ts">
	import MainLayout from "../../layouts/MainLayout.svelte";
	import PageLayout from "../../layouts/PageLayout.svelte";
	import PageHeader from "../../molecules/header/PageHeader.svelte";
	import GroupDealList from "../../organisms/list/GroupDealList.svelte";
</script>

<MainLayout>
	<PageHeader title="그룹 딜" />
	<PageLayout>
		<GroupDealList />
	</PageLayout>
</MainLayout>

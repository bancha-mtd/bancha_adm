<script lang="ts">
	import MainLayout from "../../layouts/MainLayout.svelte";
	import PageLayout from "../../layouts/PageLayout.svelte";
	import PageHeader from "../../molecules/header/PageHeader.svelte";
	import GroupDealDetail from "../../organisms/groupdeal/GroupDealDetail.svelte";

	export let params: any;
</script>

<MainLayout>
	<PageHeader title="그룹 딜" />
	<PageLayout>
		<GroupDealDetail itemId={params.id} />
	</PageLayout>
</MainLayout>

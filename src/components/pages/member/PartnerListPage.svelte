<script lang="ts">
	import MainLayout from "../../layouts/MainLayout.svelte";
	import PageLayout from "../../layouts/PageLayout.svelte";
	import PageHeader from "../../molecules/header/PageHeader.svelte";
	import PartnerList from "../../organisms/partner/PartnerList.svelte";
	import PartnerListPanel from "../../organisms/partner/PartnerListPanel.svelte";
</script>

<MainLayout>
	<PageHeader title="파트너" />
	<PageLayout>
		<PartnerListPanel />
		<PartnerList />
	</PageLayout>
</MainLayout>

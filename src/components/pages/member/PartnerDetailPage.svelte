<script lang="ts">
	import MainLayout from "../../layouts/MainLayout.svelte";
	import PageLayout from "../../layouts/PageLayout.svelte";
	import PageHeader from "../../molecules/header/PageHeader.svelte";
	import PartnerDetail from "../../organisms/partner/PartnerDetail.svelte";

	export let params: any;
</script>

<MainLayout>
	<PageHeader title="파트너" />
	<PageLayout>
		<PartnerDetail itemId={params.id} />
	</PageLayout>
</MainLayout>

<script lang="ts">
	import MainLayout from "../../layouts/MainLayout.svelte";
	import PageLayout from "../../layouts/PageLayout.svelte";
	import PageHeader from "../../molecules/header/PageHeader.svelte";
	import RefundDetail from "../../organisms/refund/RefundDetail.svelte";

	export let params: any;
</script>

<MainLayout>
	<PageHeader title="환불규정" />
	<PageLayout>
		<RefundDetail itemId={params.id} />
	</PageLayout>
</MainLayout>

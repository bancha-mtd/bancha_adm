<script lang="ts">
	import MainLayout from "../../layouts/MainLayout.svelte";
	import PageLayout from "../../layouts/PageLayout.svelte";
	import PageHeader from "../../molecules/header/PageHeader.svelte";
	import RefundList from "../../organisms/refund/RefundList.svelte";
</script>

<MainLayout>
	<PageHeader title="환불규정" />
	<PageLayout>
		<RefundList />
	</PageLayout>
</MainLayout>

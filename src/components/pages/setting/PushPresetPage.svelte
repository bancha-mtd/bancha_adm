<script lang="ts">
	import MainLayout from "../../layouts/MainLayout.svelte";
	import PageLayout from "../../layouts/PageLayout.svelte";
	import PageHeader from "../../molecules/header/PageHeader.svelte";
	import CustomerPushPresetPanel from "../../organisms/push/CustomerPushPresetPanel.svelte";
	import PartnerPushPresetPanel from "../../organisms/push/PartnerPushPresetPanel.svelte";
</script>

<MainLayout>
	<PageHeader title="푸시알림" />
	<PageLayout>
		<CustomerPushPresetPanel />
		<PartnerPushPresetPanel />
	</PageLayout>
</MainLayout>

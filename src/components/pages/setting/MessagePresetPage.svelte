<script lang="ts">
	import MainLayout from "../../layouts/MainLayout.svelte";
	import PageLayout from "../../layouts/PageLayout.svelte";
	import PageHeader from "../../molecules/header/PageHeader.svelte";
	import CustomerMessagePresetPanel from "../../organisms/message/CustomerMessagePresetPanel.svelte";
	import PartnerMessagePresetPanel from "../../organisms/message/PartnerMessagePresetPanel.svelte";
</script>

<MainLayout>
	<PageHeader title="메시지" />
	<PageLayout>
		<CustomerMessagePresetPanel />
		<PartnerMessagePresetPanel />
	</PageLayout>
</MainLayout>

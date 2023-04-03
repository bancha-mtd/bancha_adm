<script lang="ts">
	import MainLayout from "../../layouts/MainLayout.svelte";
	import PageLayout from "../../layouts/PageLayout.svelte";
	import PageHeader from "../../molecules/header/PageHeader.svelte";
	import PushAlarmList from "../../organisms/push/PushAlarmList.svelte";
	import PushSendPanel from "../../organisms/push/PushSendPanel.svelte";
</script>

<MainLayout>
	<PageHeader title="푸쉬알림" />
	<PageLayout>
		<PushSendPanel />
		<PushAlarmList />
	</PageLayout>
</MainLayout>

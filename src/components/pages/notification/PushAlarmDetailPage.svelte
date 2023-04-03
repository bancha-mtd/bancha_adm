<script lang="ts">
	import MainLayout from "../../layouts/MainLayout.svelte";
	import PageLayout from "../../layouts/PageLayout.svelte";
	import PageHeader from "../../molecules/header/PageHeader.svelte";
	import PushAlarmDetail from "../../organisms/push/PushAlarmDetail.svelte";

	export let params: any;
</script>

<MainLayout>
	<PageHeader title="푸쉬알림" />
	<PageLayout>
		<div>수정예정</div>
		<PushAlarmDetail itemId={params.id} />
	</PageLayout>
</MainLayout>

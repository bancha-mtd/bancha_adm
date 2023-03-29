<script lang="ts">
	import MainLayout from "../../layouts/MainLayout.svelte";
	import PageLayout from "../../layouts/PageLayout.svelte";
	import PageHeader from "../../molecules/header/PageHeader.svelte";
	import EventDetail from "../../organisms/event/EventDetail.svelte";

	export let params: any;
</script>

<MainLayout>
	<PageHeader title="이벤트" />
	<PageLayout>
		<EventDetail itemId={params.id} />
	</PageLayout>
</MainLayout>

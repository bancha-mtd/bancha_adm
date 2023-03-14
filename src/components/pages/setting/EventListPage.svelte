<script lang="ts">
	import MainLayout from "../../layouts/MainLayout.svelte";
	import PageLayout from "../../layouts/PageLayout.svelte";
	import PageHeader from "../../molecules/header/PageHeader.svelte";
	import EventList from "../../organisms/event/EventList.svelte";
</script>

<MainLayout>
	<PageHeader title="이벤트" />
	<PageLayout>
		<EventList />
	</PageLayout>
</MainLayout>

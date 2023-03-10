<script lang="ts">
	import MainLayout from "../../layouts/MainLayout.svelte";
	import PageLayout from "../../layouts/PageLayout.svelte";
	import PageHeader from "../../molecules/header/PageHeader.svelte";
	import ReservationList from "../../organisms/reservation/ReservationList.svelte";
	import ReservationListPanel from "../../organisms/reservation/ReservationListPanel.svelte";
</script>

<MainLayout>
	<PageHeader title="예약관리" />
	<PageLayout>
		<ReservationListPanel />
		<ReservationList />
	</PageLayout>
</MainLayout>

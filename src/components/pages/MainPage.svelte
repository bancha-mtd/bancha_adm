<script>
	import SpaceBetween from "../atoms/layouts/SpaceBetween.svelte";
	import MainLayout from "../layouts/MainLayout.svelte";
	import PageLayout from "../layouts/PageLayout.svelte";
	import PageHeader from "../molecules/header/PageHeader.svelte";
	import ActiveUserCountPanel from "../organisms/main/ActiveUserCountPanel.svelte";
	import CancelCountPanel from "../organisms/main/CancelCountPanel.svelte";
	import QaCountPanel from "../organisms/main/QACountPanel.svelte";
	import RegisterCountPanel from "../organisms/main/RegisterCountPanel.svelte";
	import ReservationCountPanel from "../organisms/main/ReservationCountPanel.svelte";
	import ReservationListPanel from "../organisms/main/ReservationListPanel.svelte";
</script>

<MainLayout>
	<PageHeader title="대시보드" />
	<PageLayout>
		<SpaceBetween gap="20px">
			<ReservationCountPanel />
			<CancelCountPanel />
			<ActiveUserCountPanel />
		</SpaceBetween>
		<SpaceBetween marginTop="20px" gap="20px">
			<div>
				<RegisterCountPanel />
				<QaCountPanel />
			</div>
			<ReservationListPanel />
		</SpaceBetween>
	</PageLayout>
</MainLayout>

<style>
	div {
		width: 24%;
		height: calc(100vh - 400px);
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
</style>

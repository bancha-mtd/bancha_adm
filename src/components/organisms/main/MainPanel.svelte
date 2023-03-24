<script>
	import ReservationListPanel from "../../molecules/main/ReservationListPanel.svelte";
	import TitledMainPanel from "../../molecules/main/TitledMainPanel.svelte";
	import SpaceBetween from "../../atoms/layouts/SpaceBetween.svelte";
	import { onMount } from "svelte";
	import APIs from "../../utils/APIs";

	let statistics = {
		reservationCnt: 0,
		visitCnt: 0,
		latestUserCnt: 0,
		latestPartnerCnt: 0,
	};

	onMount(() => {
		APIs.getMainDashBoard().then((res) => {
			if (res.status === 200) {
				statistics = res.data.statistics;
			}
		});
	});
</script>

<SpaceBetween width="calc(100vw-240px)" gap="20px" marginBottom="20px">
	<TitledMainPanel
		value={statistics.reservationCnt.toLocaleString()}
		title="예약건수"
	/>
	<TitledMainPanel
		value={statistics.visitCnt.toLocaleString()}
		title="방문자수(월)"
	/>
	<TitledMainPanel
		value={statistics.latestUserCnt.toLocaleString()}
		title="신규 회원(월)"
	/>
	<TitledMainPanel
		value={statistics.latestPartnerCnt.toLocaleString()}
		title="신규 파트너(월)"
	/>
</SpaceBetween>
<ReservationListPanel />

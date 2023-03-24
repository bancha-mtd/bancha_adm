<script>
	import ReservationListPanel from "../../molecules/main/ReservationListPanel.svelte";
	import TitledMainPanel from "../../molecules/main/TitledMainPanel.svelte";
	import SpaceBetween from "../../atoms/layouts/SpaceBetween.svelte";
</script>

<SpaceBetween width="calc(100vw-240px)" gap="20px" marginBottom="20px">
	<TitledMainPanel title="예약건수" />
	<TitledMainPanel title="방문자수(월)" />
	<TitledMainPanel title="신규 회원(월)" />
	<TitledMainPanel title="신규 파트너(월)" />
</SpaceBetween>
<ReservationListPanel />

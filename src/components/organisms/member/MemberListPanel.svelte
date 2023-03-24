<script lang="ts">
	import { onMount } from "svelte";
	import PanelLayout from "../../layouts/PanelLayout.svelte";
	import TitledNumber from "../../molecules/panel/TitledNumber.svelte";
	import APIs from "../../utils/APIs";

	let value = {
		memberCntTotal: 0,
		latestMemberCntPerDay: 0,
		latestMemberCntPerMonth: 0,
		latestMemberCntPerYear: 0,
	};

	onMount(() => {
		APIs.getMemberStatistic().then((res) => {
			value = res.data;
		});
	});
</script>

<PanelLayout height="140px">
	<TitledNumber title="총 회원" value={value.memberCntTotal} />
	<TitledNumber title="신규 회원/일" value={value.latestMemberCntPerDay} />
	<TitledNumber title="신규 회원/월" value={value.latestMemberCntPerMonth} />
	<TitledNumber title="신규 회원/년" value={value.latestMemberCntPerYear} />
</PanelLayout>

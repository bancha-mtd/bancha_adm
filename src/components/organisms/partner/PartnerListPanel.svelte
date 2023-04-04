<script lang="ts">
	import { onMount } from "svelte";
	import PanelLayout from "../../layouts/PanelLayout.svelte";
	import TitledNumber from "../../molecules/panel/TitledNumber.svelte";
	import APIs from "../../utils/APIs";

	let value = {
		partnerCntTotal: 0,
		latestPartnerCntPerDay: 0,
		latestPartnerCntPerMonth: 0,
		latestPartnerCntPerYear: 0,
	};

	onMount(() => {
		APIs.getPartnerStatistic().then((res) => {
			value = res.data;
		});
	});
</script>

<PanelLayout height="140px">
	<TitledNumber title="총 파트너" value={value.partnerCntTotal} />
	<TitledNumber title="신규 파트너/일" value={value.latestPartnerCntPerDay} />
	<TitledNumber title="신규 파트너/월" value={value.latestPartnerCntPerMonth} />
	<TitledNumber title="신규 파트너/년" value={value.latestPartnerCntPerYear} />
</PanelLayout>

<script lang="ts">
	import { onMount } from "svelte";
	import PanelLayout from "../../layouts/PanelLayout.svelte";
	import TitledNumber from "../../molecules/panel/TitledNumber.svelte";
	import APIs from "../../utils/APIs";

	let value = {
		banchaOnlyProductCnt: 0,
		genericProductCnt: 0,
		latestProductCnt: 0,
		totalProductCnt: 0,
		usableProductCnt: 0,
	};

	onMount(() => {
		APIs.getItemStatistic().then((res) => {
			value = res.data.statistics;
			// console.log(res);
		});
	});
</script>

<PanelLayout height="140px">
	<TitledNumber title="신규 상품" value={value.banchaOnlyProductCnt} />
	<TitledNumber title="총 상품" value={value.genericProductCnt} />
	<TitledNumber title="노출 상품" value={value.latestProductCnt} />
	<TitledNumber title="일반 상품" value={value.totalProductCnt} />
	<TitledNumber title="반차 상품" value={value.usableProductCnt} />
</PanelLayout>

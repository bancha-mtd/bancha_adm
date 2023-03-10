<script lang="ts">
	import PanelLayout from "../../layouts/PanelLayout.svelte";
	import TitledNumber from "../../molecules/panel/TitledNumber.svelte";

	let value = [0, 0, 0, 0, 0];
</script>

<PanelLayout height="140px">
	<TitledNumber title="신규 상품" value={value[0]} />
	<TitledNumber title="총 상품" value={value[1]} />
	<TitledNumber title="노출 상품" value={value[2]} />
	<TitledNumber title="일반 상품" value={value[3]} />
	<TitledNumber title="반차 상품" value={value[4]} />
</PanelLayout>

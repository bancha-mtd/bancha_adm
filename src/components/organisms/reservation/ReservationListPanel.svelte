<script lang="ts">
	import PanelLayout from "../../layouts/PanelLayout.svelte";
	import TitledNumber from "../../molecules/panel/TitledNumber.svelte";

	let value = [0, 0, 0];
</script>

<PanelLayout height="140px">
	<TitledNumber title="예약" value={value[0]} />
	<TitledNumber title="확정 대기" value={value[1]} />
	<TitledNumber title="취소" value={value[2]} />
</PanelLayout>

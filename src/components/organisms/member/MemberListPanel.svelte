<script lang="ts">
	import PanelLayout from "../../layouts/PanelLayout.svelte";
	import TitledNumber from "../../molecules/panel/TitledNumber.svelte";

	let value = [0, 0, 0, 0];
</script>

<PanelLayout height="140px">
	<TitledNumber title="총 회원" value={value[0]} />
	<TitledNumber title="신규 회원/일" value={value[1]} />
	<TitledNumber title="신규 회원/월" value={value[2]} />
	<TitledNumber title="신규 회원/년" value={value[3]} />
</PanelLayout>

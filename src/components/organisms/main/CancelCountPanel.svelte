<script lang="ts">
	import TitledPanelLayout from "../../layouts/TitledPanelLayout.svelte";
	import DayWeekMonthList from "../../molecules/panel/DayWeekMonthList.svelte";
</script>

<TitledPanelLayout
	title="취소 건수"
	to="/"
	width="calc((100%-40px)/3)"
	height="240px"
>
	<DayWeekMonthList values={[0, 0, 0]} />
</TitledPanelLayout>

<style>
</style>

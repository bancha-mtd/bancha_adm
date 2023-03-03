<script lang="ts">
	import DayWeekMonthListItem from "./DayWeekMonthListItem.svelte";
	export let values: number[];
</script>

<ul>
	<DayWeekMonthListItem type="일" value={values[0]} />
	<hr />
	<DayWeekMonthListItem type="주" value={values[1]} />
	<hr />
	<DayWeekMonthListItem type="월" value={values[2]} />
</ul>

<style>
	ul {
		padding: 0;
	}
</style>

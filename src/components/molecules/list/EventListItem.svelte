<script lang="ts">
	import LinkedText from "../../atoms/links/LinkedText.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import type { EventItem } from "../../utils/Types";

	export let item: EventItem = {
		id: -1,
		title: "제목",
		startDate: "시작",
		endDate: "끝",
		views: 0,
	};
</script>

<ListItemLayout>
	<Text width="15%">{item.id}</Text>
	<LinkedText to="/event/{item.id}" width="40%">{item.title}</LinkedText>
	<Text width="15%">{item.startDate}</Text>
	<Text width="15%">{item.endDate}</Text>
	<Text width="15%">{item.views}</Text>
</ListItemLayout>

<script lang="ts">
	import LinkedText from "../../atoms/links/LinkedText.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import type { ExhibitionItem } from "../../utils/Types";

	export let item: ExhibitionItem = {
		id: -1,
		title: "제목",
		partners: 0,
		items: 0,
		startDate: "시작",
		endDate: "끝",
		views: 0,
		sales: 0,
	};
</script>

<ListItemLayout>
	<Text width="10%">{item.id.toLocaleString()}</Text>
	<LinkedText to="/exhibition/{item.id}" width="30%">{item.title}</LinkedText>
	<Text width="10%">{item.partners.toLocaleString()}</Text>
	<Text width="10%">{item.items.toLocaleString()}</Text>
	<Text width="10%">{item.startDate}</Text>
	<Text width="10%">{item.endDate}</Text>
	<Text width="10%">{item.views.toLocaleString()}</Text>
	<Text width="10%">{item.sales.toLocaleString()}</Text>
</ListItemLayout>

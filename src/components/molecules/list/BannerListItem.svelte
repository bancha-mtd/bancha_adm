<script lang="ts">
	import LinkedText from "../../atoms/links/LinkedText.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";

	interface BannerItem {
		id: string;
		title: string;
		priority: string;
		startDate: string;
		endDate: string;
		clicks: string;
	}

	export let item: BannerItem = {
		id: "코드",
		title: "제목",
		priority: "순위",
		startDate: "시작일자",
		endDate: "종료일자",
		clicks: "클릭수",
	};
</script>

<ListItemLayout>
	<Text width="12%">{item.id}</Text>
	<LinkedText to="/banner/{item.id}" width="40%">{item.title}</LinkedText>
	<Text width="12%">{item.priority}</Text>
	<Text width="12%">{item.startDate}</Text>
	<Text width="12%">{item.endDate}</Text>
	<Text width="12%">{item.clicks}</Text>
</ListItemLayout>

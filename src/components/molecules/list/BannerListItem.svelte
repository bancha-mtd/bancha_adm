<script lang="ts">
	import LinkedText from "../../atoms/links/LinkedText.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import type { BannerItem } from "../../utils/Types";

	export let item: BannerItem = {
		id: -1,
		title: "제목",
		priority: "순위",
		dateBegin: "시작일자",
		dateEnd: "종료일자",
		viewCnt: "클릭수",
	};
</script>

<ListItemLayout>
	<Text width="12%">{item.id}</Text>
	<LinkedText to="/banner/{item.id}" width="40%">{item.title}</LinkedText>
	<Text width="12%">{item.priority}</Text>
	<Text width="12%">{item.dateBegin}</Text>
	<Text width="12%">{item.dateEnd}</Text>
	<Text width="12%">{item.viewCnt}</Text>
</ListItemLayout>

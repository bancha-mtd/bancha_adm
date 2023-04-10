<script lang="ts">
	import LinkedText from "../../atoms/links/LinkedText.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import type { SectionItem } from "../../utils/Types";

	export let item: SectionItem = {
		id: 0,
		title: "제목",
		priority: 0,
		productCnt: 0,
		useYn: true,
	};
</script>

<ListItemLayout>
	<Text width="20%">{item.id.toLocaleString()}</Text>
	<LinkedText to="/section/{item.id}" width="25%">{item.title}</LinkedText>
	<Text width="20%">{item.priority.toLocaleString()}</Text>
	<Text width="20%">{item.productCnt.toLocaleString()}</Text>
	<Text width="15%">{item.useYn ? "사용 중" : "사용 안함"}</Text>
</ListItemLayout>

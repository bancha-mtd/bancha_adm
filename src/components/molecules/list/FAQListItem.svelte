<script lang="ts">
	import LinkedText from "../../atoms/links/LinkedText.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import type { FAQItem } from "../../utils/Types";

	export let item: FAQItem = {
		id: -1,
		title: "제목",
		createtime: "업로드 일자",
		views: "0",
	};
</script>

<ListItemLayout>
	<Text width="15%">{item.id}</Text>
	<LinkedText to="/faq/{item.id}" width="40%">{item.title}</LinkedText>
	<Text width="30%">{item.createtime}</Text>
	<Text width="15%">{item.views}</Text>
</ListItemLayout>

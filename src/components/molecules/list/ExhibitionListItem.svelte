<script lang="ts">
	import LinkedText from "../../atoms/links/LinkedText.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import type { ExhibitionItem } from "../../utils/Types";

	export let item: ExhibitionItem = {
		id: -1,
		title: "제목",
		partnerCnt: 0,
		productCnt: 0,
		fromDate: "",
		endDate: "new Date()",
		viewCnt: 0,
		saleCnt: 0,
	};
</script>

<ListItemLayout gap="2%">
	<Text width="6.8%">{item.id.toLocaleString()}</Text>
	<LinkedText to="/exhibition/{item.id}" width="30%">{item.title}</LinkedText>
	<Text width="6.8%">{item.partnerCnt.toLocaleString()}</Text>
	<Text width="6.8%">{item.productCnt.toLocaleString()}</Text>
	<Text width="10%">{item.fromDate.replace("T", " ")}</Text>
	<Text width="10%">{item.endDate.replace("T", " ")}</Text>
	<Text width="6.8%">{item.viewCnt.toLocaleString()}</Text>
	<Text width="6.8%">{item.saleCnt.toLocaleString()}</Text>
</ListItemLayout>

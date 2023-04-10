<script lang="ts">
	import LinkedText from "../../atoms/links/LinkedText.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import type { GroupDealItem } from "../../utils/Types";

	export let item: GroupDealItem = {
		id: -1,
		title: "제목",
		discountedPrice: 0,
		partner: "파트너",
		endDate: "종료",
		capacity: 0,
	};
</script>

<ListItemLayout>
	<Text width="15%">{item.id}</Text>
	<LinkedText to="/groupdeal/{item.id}" width="25%">{item.title}</LinkedText>
	<Text width="15%">{item.discountedPrice}</Text>
	<Text width="15%">{item.partner}</Text>
	<Text width="15%">{item.endDate}</Text>
	<Text width="15%">{item.capacity}</Text>
</ListItemLayout>

<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import LinkedText from "../../atoms/links/LinkedText.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import type { ReviewItem } from "../../utils/Types";

	export let item: ReviewItem = {
		id: -1,
		review: "후기",
		title: "상품명",
		itemId: -1,
		writer: "작성자",
		writtenDate: "작성일",
	};
	export let del: (id: number) => void = () => {};
</script>

<ListItemLayout>
	<LinkedText to="/review/{item.id}" width="45%">{item.review}</LinkedText>
	<LinkedText to="/review/{item.itemId}" width="25%">{item.title}</LinkedText>
	<Text width="12%">{item.writer}</Text>
	<Text width="12%">{item.writtenDate}</Text>
	<GreyBackgroundButton
		height="30px"
		fontSize="16px"
		onClick={() => {
			del(item.id);
		}}>삭제</GreyBackgroundButton
	>
</ListItemLayout>

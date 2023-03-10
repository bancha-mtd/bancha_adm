<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import LinkedText from "../../atoms/links/LinkedText.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";

	export let id: string = "코드";
	export let review: string = "후기";
	export let title: string = "상품명";
	export let itemId: string = "상품 코드";
	export let writer: string = "작성자";
	export let writtenDate: string = "작성일시";
	export let del: (id: string) => void = () => {};
</script>

<ListItemLayout>
	<LinkedText to="/review/{id}" width="45%">{review}</LinkedText>
	<LinkedText to="/review/{itemId}" width="25%">{title}</LinkedText>
	<Text width="12%">{writer}</Text>
	<Text width="12%">{writtenDate}</Text>
	<GreyBackgroundButton
		height="30px"
		fontSize="16px"
		onClick={() => {
			del(id);
		}}>삭제</GreyBackgroundButton
	>
</ListItemLayout>

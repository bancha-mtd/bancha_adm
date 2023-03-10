<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import LinkedText from "../../atoms/links/LinkedText.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";

	export let id: string = "코드";
	export let title: string = "상품명";
	export let price: string = "금액";
	export let partner: string = "파트너";
	export let manager: string = "담당자";
	export let sales: string = "판매량";
	export let views: string = "조회수";
	export let uploadTime: string = "업로드 시간";
	export let hide: (id: string) => void = () => {};
</script>

<ListItemLayout>
	<Text width="10%">{id}</Text>
	<LinkedText to="/item/{id}" width="24%">{title}</LinkedText>
	<Text width="10%">{price}</Text>
	<Text width="10%">{partner}</Text>
	<Text width="10%">{manager}</Text>
	<Text width="10%">{sales}</Text>
	<Text width="10%">{views}</Text>
	<Text width="10%">{uploadTime}</Text>
	<GreyBackgroundButton
		height="30px"
		fontSize="16px"
		onClick={() => {
			hide(id);
		}}>숨기기</GreyBackgroundButton
	>
</ListItemLayout>

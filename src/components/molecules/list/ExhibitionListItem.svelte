<script lang="ts">
	import LinkedText from "../../atoms/links/LinkedText.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";

	export let id: string = "코드";
	export let title: string = "기획전명";
	export let partners: string = "참여 공급자";
	export let items: string = "상품";
	export let dateBegin: string = "시작일자";
	export let dateEnd: string = "종료일자";
	export let views: string = "조회수";
	export let sales: string = "판매량";
</script>

<ListItemLayout>
	<Text width="10%">{id}</Text>
	<LinkedText to="/item/{id}" width="30%">{title}</LinkedText>
	<Text width="10%">{partners}</Text>
	<Text width="10%">{items}</Text>
	<Text width="10%">{dateBegin}</Text>
	<Text width="10%">{dateEnd}</Text>
	<Text width="10%">{views}</Text>
	<Text width="10%">{sales}</Text>
</ListItemLayout>

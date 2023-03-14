<script lang="ts">
	import LinkedText from "../../atoms/links/LinkedText.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";

	export let id: string = "코드";
	export let title: string = "기획전명";
	export let partners: string = "참여 공급자";
	export let items: string = "상품";
	export let startDate: string = "시작일자";
	export let endDate: string = "종료일자";
	export let views: string = "조회수";
	export let sales: string = "판매량";
</script>

<ListItemLayout>
	<Text width="10%">{id}</Text>
	<LinkedText to="/exhibition/{id}" width="30%">{title}</LinkedText>
	<Text width="10%">{partners}</Text>
	<Text width="10%">{items}</Text>
	<Text width="10%">{startDate}</Text>
	<Text width="10%">{endDate}</Text>
	<Text width="10%">{views}</Text>
	<Text width="10%">{sales}</Text>
</ListItemLayout>

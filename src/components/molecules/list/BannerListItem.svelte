<script lang="ts">
	import LinkedText from "../../atoms/links/LinkedText.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";

	export let id: string = "코드";
	export let title: string = "제목";
	export let priority: string = "순위";
	export let startDate: string = "시작일자";
	export let endDate: string = "종료일자";
	export let clicks: string = "조회수";
</script>

<ListItemLayout>
	<Text width="12%">{id}</Text>
	<LinkedText to="/banner/{id}" width="40%">{title}</LinkedText>
	<Text width="12%">{priority}</Text>
	<Text width="12%">{startDate}</Text>
	<Text width="12%">{endDate}</Text>
	<Text width="12%">{clicks}</Text>
</ListItemLayout>

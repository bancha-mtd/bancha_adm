<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import LinkedText from "../../atoms/links/LinkedText.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";

	export let item: object = {
		id: "코드",
		title: "포인트명",
		point: "순위",
		startDate: "시작일자",
		endDate: "종료일자",
		gives: "발급수",
	};
	export let inactive: (id: number) => void = () => {
		console.log(item);
	};
</script>

<ListItemLayout>
	<Text width="20%">{item.id}</Text>
	<LinkedText to="/preset/point/{item.id}" width="25%">{item.title}</LinkedText>
	<Text width="15%">{item.point}</Text>
	<Text width="15%">{item.startDate}~{item.endDate}</Text>
	<Text width="15%">{item.gives}</Text>
	<GreyBackgroundButton
		width="80px"
		height="30px"
		fontSize="16px"
		onClick={() => {
			inactive(item.id);
		}}>비활성화</GreyBackgroundButton
	>
</ListItemLayout>

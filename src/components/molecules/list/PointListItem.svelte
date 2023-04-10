<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import LinkedTwoValueText from "../../atoms/links/LinkedTwoValueText.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import type { PointItem } from "../../utils/Types";

	export let item: PointItem = {
		id: -1,
		email: "메일",
		nickname: "닉네임",
		content: "이유",
		point: 0,
		givenDate: "지급일",
		expireDate: "소멸일",
		remain: 0,
	};

	export let retrieve: () => void = () => {
		console.log(item);
	};
</script>

<ListItemLayout>
	<LinkedTwoValueText
		to="/partner/{item.id}"
		width="20%"
		val1={item.email}
		val2={item.nickname}
	/>
	<Text width="25%">{item.content}</Text>
	<Text width="12%">{item.point}</Text>
	<Text width="12%">{item.givenDate}</Text>
	<Text width="12%">{item.expireDate}</Text>
	<Text width="12%">{item.remain}</Text>
	<GreyBackgroundButton height="30px" fontSize="16px" onClick={retrieve}
		>회수</GreyBackgroundButton
	>
</ListItemLayout>

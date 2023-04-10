<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import BorderedInput from "../../atoms/inputs/BorderedInput.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import type { ManagerItem, SelectType } from "../../utils/Types";
	import ListItemSelector from "./ListItemSelector.svelte";

	export let item: ManagerItem = {
		id: -1,
		email: "이메일",
		grade: 0,
		nickname: "닉네임",
		group: "소속",
		active: true,
	};

	let gradeList: SelectType[] = [
		{ id: 1, name: "최고관리자", value: 1 },
		{ id: 2, name: "중간관리자", value: 2 },
		{ id: 3, name: "일반관리자", value: 3 },
	];
	let selected: SelectType = gradeList[item.grade];

	export let modify: () => void = () => {
		console.log(item);
	};
	export let del: () => void = () => {
		console.log(item);
	};
</script>

<ListItemLayout>
	<Text width="12%">{item.id}</Text>
	<Text width="25%">{item.email}</Text>
	<ListItemSelector bind:selected lists={gradeList} width="12%" />
	<Text width="12%">{item.nickname}</Text>
	<BorderedInput bind:value={item.group} width="15%" />
	<Text width="12%">{item.active}</Text>
	<div>
		<GreyBackgroundButton height="30px" fontSize="16px" onClick={modify}
			>수정</GreyBackgroundButton
		>
		<GreyBackgroundButton height="30px" fontSize="16px" onClick={del}
			>삭제</GreyBackgroundButton
		>
	</div>
</ListItemLayout>

<style>
	div {
		width: 12%;
		display: flex;
		justify-content: center;
		gap: 10%;
	}
</style>

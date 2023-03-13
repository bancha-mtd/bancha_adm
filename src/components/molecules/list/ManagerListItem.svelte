<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import SmallInput from "../../atoms/inputs/SmallInput.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import ListItemSelector from "./ListItemSelector.svelte";

	export let id: string = "코드";
	export let email: string = "이메일";
	export let grade: string = "권한";
	export let nickname: string = "닉네임";
	export let group: string = "소속";
	export let active: string = "상태";

	let gradeList: object[] = [
		{ id: 1, name: "최고관리자" },
		{ id: 2, name: "중간관리자" },
		{ id: 3, name: "일반관리자" },
	];
	let selected: object = gradeList[Number(grade) - 1];

	export let modify: () => void = () => {
		console.log(id, email, nickname, group, active);
	};
	export let del: () => void = () => {
		console.log(id, email, nickname, group, active);
	};
</script>

<ListItemLayout>
	<Text width="12%">{id}</Text>
	<Text width="25%">{email}</Text>
	<ListItemSelector bind:selected lists={gradeList} width="12%" />
	<Text width="12%">{nickname}</Text>
	<SmallInput bind:value={group} width="15%" />
	<Text width="12%">{active}</Text>
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

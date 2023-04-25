<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import BorderedInput from "../../atoms/inputs/BorderedInput.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import type { ManagerItem, SelectType } from "../../utils/Types";
	import ListItemSelector from "./ListItemSelector.svelte";
	import APIs from "../../utils/APIs";

	export let item: ManagerItem = {
		id: -1,
		userId: "이메일",
		authType: 0,
		nickname: "닉네임",
		department: "소속",
		useYn: true,
	};

	let gradeList: SelectType[] = [
		{ id: 1, name: "최고관리자", value: 1 },
		{ id: 2, name: "중간관리자", value: 2 },
		{ id: 3, name: "일반관리자", value: 3 },
	];
	let selected: SelectType = gradeList[item.authType - 1];

	export let reload: () => void;
	const modify: () => void = () => {
		APIs.editManager(item.id, selected.value, item.department).then((res) => {
			if (res.data != "권한 업데이트 실패") {
				alert("수정 완료");
				reload();
			} else alert("오류 발생");
		});
	};
	const del: () => void = () => {
		APIs.deleteManager(item.id).then((res) => {
			if (res.status === 200) {
				alert("사용 안 함 처리 완료");
			}
		});
		reload();
	};
</script>

<ListItemLayout>
	<Text width="12%">{item.id}</Text>
	<Text width="25%">{item.userId}</Text>
	<ListItemSelector bind:selected lists={gradeList} width="12%" />
	<Text width="12%">{item.nickname}</Text>
	<BorderedInput bind:value={item.department} width="15%" />
	<Text width="12%">{item.useYn ? "정상" : "사용 안 함"}</Text>
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

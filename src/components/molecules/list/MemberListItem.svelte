<script lang="ts">
	import LinkedTwoValueText from "../../atoms/links/LinkedTwoValueText.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import type { MemberItem } from "../../utils/Types";
	import TwoValueText from "./TwoValueText.svelte";

	export let item: MemberItem = {
		id: -1,
		email: "이메일",
		nickName: "닉네임",
		grade: -1,
		cellPhone: "연락처",
		reviewCnt: 0,
		buyCnt: 0,
		paidSum: 0,
		useYn: true,
		lastLogin: "최종접속일",
		createDate: "가입일",
	};

	let grade = ["VIP", "반차 절친", "반차 친구"];
</script>

<ListItemLayout>
	<Text width="10%">{item.id.toLocaleString()}</Text>
	<LinkedTwoValueText
		to="/member/{item.id}"
		width="20%"
		val1={item.email}
		val2={item.nickName}
	/>
	<Text width="8%">{grade[item.grade]}</Text>
	<Text width="10%">{item.cellPhone}</Text>
	<Text width="10%"
		>{item.reviewCnt === null ? "0" : item.reviewCnt.toLocaleString()}</Text
	>
	<Text width="10%"
		>{item.buyCnt === null ? "0" : item.buyCnt.toLocaleString()}</Text
	>
	<Text width="10%"
		>{item.paidSum === null ? "0" : item.paidSum.toLocaleString()}</Text
	>
	<Text width="8%">{item.useYn ? "정상" : "오류"}</Text>
	<TwoValueText width="14%" val1={item.lastLogin} val2={item.createDate} />
</ListItemLayout>

<script lang="ts">
	import LinkedTwoValueText from "../../atoms/links/LinkedTwoValueText.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import type { PartnerItem } from "../../utils/Types";

	export let item: PartnerItem = {
		id: -1,
		userId: "이메일",
		nickName: "닉네임",
		grade: -1,
		ceoName: "대표자",
		phoneNumber: "연락처",
		reviewCnt: 0,
		saleCnt: 0,
		productCnt: 0,
		state: true,
	};

	let grade = ["우수", "보통", "관리 요망"];
</script>

<ListItemLayout>
	<Text width="10%">{item.id}</Text>
	<LinkedTwoValueText
		to="/partner/{item.id}"
		width="20%"
		val1={item.userId}
		val2={item.nickName}
	/>
	<Text width="10%">{grade[item.grade]}</Text>
	<Text width="10%">{item.ceoName}</Text>
	<Text width="10%">{item.phoneNumber}</Text>
	<Text width="10%">{item.reviewCnt.toLocaleString()}</Text>
	<Text width="10%">{item.saleCnt.toLocaleString()}</Text>
	<Text width="10%">{item.productCnt.toLocaleString()}</Text>
	<Text width="10%">{item.state ? "정상" : "오류"}</Text>
</ListItemLayout>

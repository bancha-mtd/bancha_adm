<script lang="ts">
	import LinkedTwoValueText from "../../atoms/links/LinkedTwoValueText.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import TwoValueText from "./TwoValueText.svelte";

	interface Member {
		id: string;
		email: string;
		nickName: string;
		grade: string;
		cellPhone: string;
		reviewCnt: string;
		buyCnt: string;
		paidSum: string;
		useYn: string;
		lastLogin: string;
		createDate: string;
	}

	export let item: Member = {
		id: "코드",
		email: "이메일",
		nickName: "닉네임",
		grade: "등급",
		cellPhone: "연락처",
		reviewCnt: "후기",
		buyCnt: "구매",
		paidSum: "구매금액",
		useYn: "상태",
		lastLogin: "최종접속일",
		createDate: "가입일",
	};
</script>

<ListItemLayout>
	<Text width="10%">{item.id}</Text>
	<LinkedTwoValueText
		to="/member/{item.id}"
		width="20%"
		val1={item.email}
		val2={item.nickName}
	/>
	<Text width="8%">{item.grade}</Text>
	<Text width="10%">{item.cellPhone}</Text>
	<Text width="10%">{item.reviewCnt}</Text>
	<Text width="10%">{item.buyCnt}</Text>
	<Text width="10%">{item.paidSum}</Text>
	<Text width="8%">{item.useYn}</Text>
	<TwoValueText width="14%" val1={item.lastLogin} val2={item.createDate} />
</ListItemLayout>

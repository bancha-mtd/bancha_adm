<script lang="ts">
	import LinkedTwoValueText from "../../atoms/links/LinkedTwoValueText.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import TwoValueText from "./TwoValueText.svelte";

	export let id: string = "코드";
	export let email: string = "이메일";
	export let nickname: string = "닉네임";
	export let grade: string = "등급";
	export let phone: string = "연락처";
	export let reviews: string = "후기";
	export let puchases: string = "구매";
	export let totalPrice: string = "구매금액";
	export let active: string = "상태";
	export let lastLogin: string = "최종접속일";
	export let registerDate: string = "가입일";
</script>

<ListItemLayout>
	<Text width="10%">{id}</Text>
	<LinkedTwoValueText
		to="/member/{id}"
		width="20%"
		val1={email}
		val2={nickname}
	/>
	<Text width="10%">{grade}</Text>
	<Text width="10%">{phone}</Text>
	<Text width="10%">{reviews}</Text>
	<Text width="10%">{puchases}</Text>
	<Text width="10%">{totalPrice}</Text>
	<Text width="10%">{active}</Text>
	<TwoValueText width="10%" val1={lastLogin} val2={registerDate} />
</ListItemLayout>

<script lang="ts">
	import LinkedTwoValueText from "../../atoms/links/LinkedTwoValueText.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";

	export let id: string = "코드";
	export let email: string = "이메일";
	export let nickname: string = "닉네임";
	export let grade: string = "등급";
	export let ceo: string = "대표자";
	export let phone: string = "연락처";
	export let reviews: string = "후기";
	export let sales: string = "판매";
	export let items: string = "상품";
	export let active: string = "상태";
</script>

<ListItemLayout>
	<Text width="10%">{id}</Text>
	<LinkedTwoValueText
		to="/partner/{id}"
		width="20%"
		val1={email}
		val2={nickname}
	/>
	<Text width="10%">{grade}</Text>
	<Text width="10%">{ceo}</Text>
	<Text width="10%">{phone}</Text>
	<Text width="10%">{reviews}</Text>
	<Text width="10%">{sales}</Text>
	<Text width="10%">{items}</Text>
	<Text width="10%">{active}</Text>
</ListItemLayout>

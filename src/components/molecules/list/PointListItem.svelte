<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import LinkedTwoValueText from "../../atoms/links/LinkedTwoValueText.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";

	export let id: string = "코드";
	export let email: string = "이메일";
	export let nickname: string = "닉네임";
	export let content: string = "포인트 내용";
	export let point: string = "포인트";
	export let givenDate: string = "지급일";
	export let expireDate: string = "만료일";
	export let remain: string = "잔여 포인트";

	export let retrieve: () => void = () => {
		console.log(
			id,
			email,
			nickname,
			content,
			point,
			givenDate,
			expireDate,
			remain
		);
	};
</script>

<ListItemLayout>
	<LinkedTwoValueText
		to="/partner/{id}"
		width="20%"
		val1={email}
		val2={nickname}
	/>
	<Text width="25%">{content}</Text>
	<Text width="12%">{point}</Text>
	<Text width="12%">{givenDate}</Text>
	<Text width="12%">{expireDate}</Text>
	<Text width="12%">{remain}</Text>
	<GreyBackgroundButton height="30px" fontSize="16px" onClick={retrieve}
		>회수</GreyBackgroundButton
	>
</ListItemLayout>

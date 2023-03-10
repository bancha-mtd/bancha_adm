<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import LinkedText from "../../atoms/links/LinkedText.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import TwoValueText from "./TwoValueText.svelte";

	export let id: string = "예약번호";
	export let purchaseDate: string = "결제일시";
	export let status: string = "상태";
	export let reservationDate: string = "예약일";
	export let reservationName: string = "예약자";
	export let reservationPhone: string = "예약자 전화번호";
	export let title: string = "상품명";
	export let itemId: string = "상품코드";
	export let price: string = "결제금액";
</script>

<ListItemLayout>
	<LinkedText to="/reservation/{id}" width="12%">{id}</LinkedText>
	<Text width="12%">{purchaseDate}</Text>
	<Text width="12%">{status}</Text>
	<Text width="12%">{reservationDate}</Text>
	<TwoValueText width="12%" val1={reservationName} val2={reservationPhone} />
	<LinkedText to="/item/{itemId}" width="28%">{title}</LinkedText>
	<Text width="12%">{price}</Text>
</ListItemLayout>

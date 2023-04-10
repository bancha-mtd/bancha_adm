<script lang="ts">
	import LinkedText from "../../atoms/links/LinkedText.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import type { ReservationItem } from "../../utils/Types";
	import TwoValueText from "./TwoValueText.svelte";

	export let item: ReservationItem = {
		id: -1,
		purchaseDate: "결제일",
		status: true,
		reservationDate: "예약일",
		reservationName: "예약자",
		reservationPhone: "예약전화",
		title: "상품명",
		itemId: -1,
		price: 0,
	};
</script>

<ListItemLayout>
	<LinkedText to="/reservation/{item.id}" width="12%">{item.id}</LinkedText>
	<Text width="12%">{item.purchaseDate}</Text>
	<Text width="12%">{item.status}</Text>
	<Text width="12%">{item.reservationDate}</Text>
	<TwoValueText
		width="12%"
		val1={item.reservationName}
		val2={item.reservationPhone}
	/>
	<LinkedText to="/item/{item.itemId}" width="28%">{item.title}</LinkedText>
	<Text width="12%">{item.price}</Text>
</ListItemLayout>

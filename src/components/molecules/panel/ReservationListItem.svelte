<script lang="ts">
	import LinkedText from "../../atoms/links/LinkedText.svelte";
	import DarkGreyText from "../../atoms/texts/DarkGreyText.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";

	export let head: boolean = false;
	export let item = {
		id: "예약번호",
		title: "상품명",
		date: "예약일",
		count: "구매 수량",
		price: "결제 금액",
	};
</script>

<ListItemLayout {head}>
	<LinkedText to="/reservation/{item.id}" width="15%">{item.id}</LinkedText>
	<DarkGreyText width="40%">{item.title}</DarkGreyText>
	<DarkGreyText width="15%">{item.date}</DarkGreyText>
	<DarkGreyText width="15%">{item.count}</DarkGreyText>
	<DarkGreyText width="15%">{item.price}</DarkGreyText>
</ListItemLayout>

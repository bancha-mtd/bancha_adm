<script lang="ts">
	import GreyText from "../../atoms/texts/GreyText.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import TitledPanelLayout from "../../layouts/TitledPanelLayout.svelte";
	import ReservationListItem from "../../molecules/panel/ReservationListItem.svelte";
</script>

<TitledPanelLayout
	title="예약 내역"
	width="calc(100vw-240px)"
	height="calc(100vh - 410px)"
>
	<div class="list">
		<ListItemLayout head={true}>
			<GreyText width="15%">예약번호</GreyText>
			<GreyText width="40%">상품명</GreyText>
			<GreyText width="15%">예약일</GreyText>
			<GreyText width="15%">구매 수량</GreyText>
			<GreyText width="15%">결제 금액</GreyText>
		</ListItemLayout>
		<ul class="actual-list">
			<ReservationListItem />
		</ul>
	</div>
</TitledPanelLayout>

<style>
	.list {
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.actual-list {
		width: 100%;
		overflow-y: scroll;
		padding: 0;
		margin: 0;
	}
	.actual-list::-webkit-scrollbar {
		display: none;
	}
</style>

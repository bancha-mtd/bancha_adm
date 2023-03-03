<script lang="ts">
	import TitledPanelLayout from "../../layouts/TitledPanelLayout.svelte";
	import ReservationListItem from "../../molecules/panel/ReservationListItem.svelte";

	let t1 = 3;
	let t2 = 50000;
</script>

<TitledPanelLayout
	title="예약 내역"
	to="/"
	width="calc((100% - 20px) - 24%)"
	height="calc(100vh - 400px)"
>
	<div class="list">
		<ReservationListItem
			title="상품명"
			date="예약일"
			count="구매 수량"
			price="구매 금액"
			head={true}
		/>
		<div class="actual-list">
			<ReservationListItem
				title="asss"
				date="2023-03-03"
				count={t1.toLocaleString()}
				price={t2.toLocaleString()}
			/>
		</div>
	</div>
</TitledPanelLayout>

<style>
	.list {
		display: flex;
		flex-direction: column;
		height: calc(100% - 51px);
	}
	.actual-list {
		overflow-y: scroll;
	}
	.actual-list::-webkit-scrollbar {
		display: none;
	}
</style>

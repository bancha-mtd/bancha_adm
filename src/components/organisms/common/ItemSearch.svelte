<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import BorderedInput from "../../atoms/inputs/BorderedInput.svelte";
	import Flex from "../../atoms/layouts/Flex.svelte";
	import BorderedList from "../../atoms/lists/BorderedList.svelte";
	import LightGreyText from "../../atoms/texts/LightGreyText.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import SearchListItem from "../../molecules/search/SearchListItem.svelte";
	import SelectListItem from "../../molecules/search/SelectListItem.svelte";
	import APIs from "../../utils/APIs";

	export let products: any[] = [];
	export let productIds: number[] = [];
	let searchQuery: string;
	let lists: any[] = [];
	let loading = false;

	const search = () => {
		loading = true;

		let option = { pageSize: 20 };
		if (searchQuery !== "") {
			option["productTitle"] = searchQuery;
		}

		APIs.getItem(option).then((res) => {
			if (res.status === 200) {
				lists = res.data.content;
				loading = false;
			} else {
				alert("불러오기 에러!");
			}
		});
	};

	const select = (item: object) => {
		if (productIds.includes(item.id)) {
			alert("이미 섹션에 포함되어 있습니다.");
		} else {
			products.push({ id: item.id, title: item.productName });
			products = products;
			productIds.push(item.id);
			productIds = productIds;
		}
	};

	const unselect = (item: object) => {
		products = products.filter((e) => e.id !== item.id);
		productIds = productIds.filter((e) => e !== item.id);
	};
</script>

<div class="wrapper">
	<form>
		<Flex gap="20px">
			<BorderedInput bind:value={searchQuery} />
			<GreyBackgroundButton
				type={true}
				width="50px"
				height="30px"
				fontSize="14px"
				onClick={search}>검색</GreyBackgroundButton
			></Flex
		>
	</form>
	<BorderedList>
		<ListItemLayout height="30px" head={true}>
			<Text width="20%" fontSize="16px">코드</Text>
			<Text width="60%" fontSize="16px">상품명</Text>
		</ListItemLayout>
		{#if lists.length === 0}
			<Text>선택된 상품이 없습니다...</Text>
		{:else}
			{#each lists as e}
				<SearchListItem {select} item={e} />
			{/each}
			<LightGreyText fontSize="12px"
				>검색 결과는상위 20개만 표시됩니다</LightGreyText
			>
		{/if}
	</BorderedList>
	<BorderedList>
		<ListItemLayout height="30px" head={true}>
			<Text width="20%" fontSize="16px">코드</Text>
			<Text width="60%" fontSize="16px">상품명</Text>
		</ListItemLayout>
		{#if products.length === 0}
			<Text>선택된 상품이 없습니다...</Text>
		{:else}
			{#each products as e}
				<SelectListItem {unselect} item={e} />
			{/each}
		{/if}
	</BorderedList>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		gap: 10px;
		width: 60%;
	}
</style>

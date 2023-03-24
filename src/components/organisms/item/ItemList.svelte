<script lang="ts">
	import { onMount } from "svelte";
	import { push } from "svelte-spa-router";
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import SpaceBetween from "../../atoms/layouts/SpaceBetween.svelte";
	import GreyText from "../../atoms/texts/GreyText.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import ListLayout from "../../layouts/ListLayout.svelte";
	import SearchLayout from "../../layouts/SearchLayout.svelte";
	import ItemListItem from "../../molecules/list/ItemListItem.svelte";
	import PageSelector from "../../molecules/list/PageSelector.svelte";
	import Loading from "../../molecules/loading/Loading.svelte";
	import Search from "../../molecules/search/Search.svelte";
	import TransparentSelect from "../../molecules/search/TransparentSelect.svelte";
	import APIs from "../../utils/APIs";

	let sortStandards: object[] = [
		{ id: 1, name: "등록일순" },
		{ id: 2, name: "조회수순" },
		{ id: 3, name: "판매량순" },
	];
	let sortOrder: object[] = [
		{ id: 1, name: "내림차순" },
		{ id: 2, name: "오름차순" },
	];
	let sortIsActive: object[] = [
		{ id: 1, name: "전체" },
		{ id: 2, name: "판매중" },
		{ id: 3, name: "숨김" },
	];
	let searchQuery: string = "";
	let selectedStandard: object = sortStandards[0];
	let selectedOrder: object = sortOrder[0];
	let selectedIsActive: object = sortIsActive[0];

	let curPage: number = 1;
	let maxPage: number = 20;
	let rangeMin: number = 1;

	let list = [];

	let addItem = () => {
		push("/item/new");
	};

	let loading = true;

	onMount(() => {
		getItems(1);
	});

	const getItems = (page: number) => {
		loading = true;
		APIs.getItem({ pageSize: 10, pageNum: page }).then((res) => {
			if (res.status === 200) {
				list = res.data.content;
				maxPage = res.data.totalPages;
				loading = false;
			} else {
				alert("불러오기 에러!");
			}
		});
		curPage = page;
	};
</script>

<SearchLayout>
	<SpaceBetween gap="20px" alignItems="end">
		<Search onEnter={() => console.log(searchQuery)} value={searchQuery} />
		<TransparentSelect lists={sortStandards} selected={selectedStandard} />
		<TransparentSelect lists={sortOrder} selected={selectedOrder} />
		<TransparentSelect lists={sortIsActive} selected={selectedIsActive} />
	</SpaceBetween>
	<GreyBackgroundButton
		onClick={addItem}
		width="100px"
		height="30px"
		fontSize="16px">+ 상품 추가</GreyBackgroundButton
	>
</SearchLayout>

<ListLayout>
	<ListItemLayout head={true}>
		<GreyText width="10%">코드</GreyText>
		<GreyText width="24%">상품명</GreyText>
		<GreyText width="10%">금액</GreyText>
		<GreyText width="10%">파트너</GreyText>
		<GreyText width="10%">담당자</GreyText>
		<GreyText width="10%">판매량</GreyText>
		<GreyText width="10%">조회수</GreyText>
		<GreyText width="10%">업로드 시간</GreyText>
	</ListItemLayout>
	{#if loading}
		<Loading />
	{:else}
		{#each list as item}
			<ItemListItem {item} />
		{/each}
	{/if}
</ListLayout>

<PageSelector bind:curPage {maxPage} bind:rangeMin onClick={getItems} />

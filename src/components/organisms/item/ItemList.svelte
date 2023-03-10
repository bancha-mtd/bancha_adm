<script lang="ts">
	import GreyText from "../../atoms/texts/GreyText.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import ListLayout from "../../layouts/ListLayout.svelte";
	import SearchLayout from "../../layouts/SearchLayout.svelte";
	import ItemListItem from "../../molecules/list/ItemListItem.svelte";
	import PageSelector from "../../molecules/list/PageSelector.svelte";
	import Search from "../../molecules/search/Search.svelte";
	import TransparentSelect from "../../molecules/search/TransparentSelect.svelte";

	let sortStandards: object[] = [
		{ id: 1, name: "등록일순" },
		{ id: 2, name: "조회수순" },
		{ id: 1, name: "판매량순" },
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
	let maxPage: number = 1;
	let rangeMin: number = 1;
	let rangeMax: number = 1;
</script>

<SearchLayout>
	<Search onEnter={() => console.log(searchQuery)} value={searchQuery} />
	<TransparentSelect lists={sortStandards} selected={selectedStandard} />
	<TransparentSelect lists={sortOrder} selected={selectedOrder} />
	<TransparentSelect lists={sortIsActive} selected={selectedIsActive} />
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
	<ItemListItem />
</ListLayout>

<PageSelector {curPage} {maxPage} {rangeMin} {rangeMax} />

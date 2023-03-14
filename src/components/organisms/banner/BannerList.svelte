<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import SpaceBetween from "../../atoms/layouts/SpaceBetween.svelte";
	import GreyText from "../../atoms/texts/GreyText.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import ListLayout from "../../layouts/ListLayout.svelte";
	import SearchLayout from "../../layouts/SearchLayout.svelte";
	import BannerListItem from "../../molecules/list/BannerListItem.svelte";
	import PageSelector from "../../molecules/list/PageSelector.svelte";
	import Search from "../../molecules/search/Search.svelte";
	import TransparentSelect from "../../molecules/search/TransparentSelect.svelte";

	let sortOrder: object[] = [
		{ id: 1, name: "노출순위" },
		{ id: 2, name: "오름차순" },
		{ id: 3, name: "내림차순" },
	];

	let sortStatus: object[] = [
		{ id: 1, name: "전체" },
		{ id: 2, name: "진행 중" },
		{ id: 3, name: "기간 만료" },
	];

	let searchQuery: string = "";
	let selectedOrder: object = sortOrder[0];
	let selectedStatus: object = sortStatus[0];

	let curPage: number = 1;
	let maxPage: number = 20;
	let rangeMin: number = 1;

	let addBanner: () => void;
</script>

<SearchLayout>
	<SpaceBetween gap="20px" alignItems="end">
		<Search onEnter={() => console.log(searchQuery)} value={searchQuery} />
		<TransparentSelect lists={sortOrder} selected={selectedOrder} />
		<TransparentSelect lists={sortStatus} selected={selectedStatus} />
	</SpaceBetween>
	<GreyBackgroundButton
		onClick={addBanner}
		width="100px"
		height="30px"
		fontSize="16px">+ 배너 추가</GreyBackgroundButton
	>
</SearchLayout>

<ListLayout>
	<ListItemLayout head={true}>
		<GreyText width="12%">코드</GreyText>
		<GreyText width="40%">배너명</GreyText>
		<GreyText width="12%">노출순위</GreyText>
		<GreyText width="12%">시작일자</GreyText>
		<GreyText width="12%">종료일자</GreyText>
		<GreyText width="12%">클릭수</GreyText>
	</ListItemLayout>
	<BannerListItem />
</ListLayout>

<PageSelector {curPage} {maxPage} {rangeMin} />

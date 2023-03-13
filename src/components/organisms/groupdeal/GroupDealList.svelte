<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import SpaceBetween from "../../atoms/layouts/SpaceBetween.svelte";
	import GreyText from "../../atoms/texts/GreyText.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import ListLayout from "../../layouts/ListLayout.svelte";
	import SearchLayout from "../../layouts/SearchLayout.svelte";
	import GroupDealListItem from "../../molecules/list/GroupDealListItem.svelte";
	import PageSelector from "../../molecules/list/PageSelector.svelte";
	import Search from "../../molecules/search/Search.svelte";
	import TransparentSelect from "../../molecules/search/TransparentSelect.svelte";

	let sortIsActive: object[] = [
		{ id: 1, name: "전체" },
		{ id: 2, name: "진행 중" },
		{ id: 3, name: "종료" },
	];
	let searchQuery: string = "";
	let selectedIsActive: object = sortIsActive[0];

	let curPage: number = 1;
	let maxPage: number = 1;
	let rangeMin: number = 1;

	let addExhibition = () => {};
</script>

<SearchLayout />

<SearchLayout>
	<SpaceBetween gap="20px" alignItems="end">
		<Search onEnter={() => console.log(searchQuery)} value={searchQuery} />
		<TransparentSelect lists={sortIsActive} selected={selectedIsActive} />
	</SpaceBetween>
	<GreyBackgroundButton
		onClick={addExhibition}
		width="120px"
		height="30px"
		fontSize="16px">+ 그룹 딜 추가</GreyBackgroundButton
	>
</SearchLayout>

<ListLayout>
	<ListItemLayout head={true}>
		<GreyText width="15%">코드</GreyText>
		<GreyText width="25%">상품명</GreyText>
		<GreyText width="15%">할인금액</GreyText>
		<GreyText width="15%">파트너</GreyText>
		<GreyText width="15%">마감일자</GreyText>
		<GreyText width="15%">모집인원</GreyText>
	</ListItemLayout>
	<GroupDealListItem />
</ListLayout>

<PageSelector {curPage} {maxPage} {rangeMin} />

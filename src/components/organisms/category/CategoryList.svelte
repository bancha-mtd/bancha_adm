<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import SpaceBetween from "../../atoms/layouts/SpaceBetween.svelte";
	import GreyText from "../../atoms/texts/GreyText.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import ListLayout from "../../layouts/ListLayout.svelte";
	import SearchLayout from "../../layouts/SearchLayout.svelte";
	import CategoryListItem from "../../molecules/list/CategoryListItem.svelte";
	import PageSelector from "../../molecules/list/PageSelector.svelte";
	import Search from "../../molecules/search/Search.svelte";
	import TransparentSelect from "../../molecules/search/TransparentSelect.svelte";

	let sortIsActive: object[] = [
		{ id: 1, name: "전체" },
		{ id: 2, name: "사용 중" },
	];
	let searchQuery: string = "";
	let selectedIsActive: object = sortIsActive[0];

	let curPage: number = 1;
	let maxPage: number = 1;
	let rangeMin: number = 1;
</script>

<SearchLayout>
	<SpaceBetween gap="20px" alignItems="end">
		<Search onEnter={() => console.log(searchQuery)} value={searchQuery} />
		<TransparentSelect lists={sortIsActive} selected={selectedIsActive} />
	</SpaceBetween>
</SearchLayout>

<ListLayout>
	<ListItemLayout head={true}>
		<GreyText width="12%">코드</GreyText>
		<GreyText width="30%">카테고리명</GreyText>
		<GreyText width="12%">상품수</GreyText>
		<GreyText width="12%">노출</GreyText>
		<GreyText width="12%">노출순위</GreyText>
		<GreyText width="12%">아이콘</GreyText>
	</ListItemLayout>
	<CategoryListItem />
</ListLayout>

<PageSelector {curPage} {maxPage} {rangeMin} />

<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import SpaceBetween from "../../atoms/layouts/SpaceBetween.svelte";
	import GreyText from "../../atoms/texts/GreyText.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import ListLayout from "../../layouts/ListLayout.svelte";
	import SearchLayout from "../../layouts/SearchLayout.svelte";
	import PageSelector from "../../molecules/list/PageSelector.svelte";
	import ReviewListItem from "../../molecules/list/ReviewListItem.svelte";
	import Search from "../../molecules/search/Search.svelte";

	let searchQuery: string = "";

	let curPage: number = 1;
	let maxPage: number = 1;
	let rangeMin: number = 1;
</script>

<SearchLayout />

<SearchLayout>
	<SpaceBetween gap="20px" alignItems="end">
		<Search onEnter={() => console.log(searchQuery)} value={searchQuery} />
	</SpaceBetween>
</SearchLayout>

<ListLayout>
	<ListItemLayout head={true}>
		<GreyText width="45%">후기</GreyText>
		<GreyText width="25%">상품명</GreyText>
		<GreyText width="12%">작성자</GreyText>
		<GreyText width="12%">작성시간</GreyText>
	</ListItemLayout>
	<ReviewListItem />
</ListLayout>

<PageSelector {curPage} {maxPage} {rangeMin} />

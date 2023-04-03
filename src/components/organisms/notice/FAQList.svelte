<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import SpaceBetween from "../../atoms/layouts/SpaceBetween.svelte";
	import BoldText from "../../atoms/texts/BoldText.svelte";
	import GreyText from "../../atoms/texts/GreyText.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import ListLayout from "../../layouts/ListLayout.svelte";
	import SearchLayout from "../../layouts/SearchLayout.svelte";
	import FaqListItem from "../../molecules/list/FAQListItem.svelte";
	import PageSelector from "../../molecules/list/PageSelector.svelte";
	import Search from "../../molecules/search/Search.svelte";

	let searchQuery: string = "";

	let curPage: number = 1;
	let maxPage: number = 1;
	let rangeMin: number = 1;

	let add = () => {};
</script>

<SpaceBetween marginBottom="20px">
	<BoldText>FAQ</BoldText>
</SpaceBetween>

<SearchLayout>
	<SpaceBetween gap="20px" alignItems="end">
		<Search onEnter={() => console.log(searchQuery)} value={searchQuery} />
	</SpaceBetween>
	<GreyBackgroundButton
		onClick={add}
		width="110px"
		height="30px"
		fontSize="16px">+ FAQ 추가</GreyBackgroundButton
	>
</SearchLayout>

<ListLayout>
	<ListItemLayout head={true}>
		<GreyText width="15%">ID</GreyText>
		<GreyText width="40%">제목</GreyText>
		<GreyText width="30%">업로드 일자</GreyText>
		<GreyText width="15%">조회수</GreyText>
	</ListItemLayout>
	<FaqListItem />
</ListLayout>

<PageSelector {curPage} {maxPage} {rangeMin} />

<script lang="ts">
	import SpaceBetween from "../../atoms/layouts/SpaceBetween.svelte";
	import GreyText from "../../atoms/texts/GreyText.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import ListLayout from "../../layouts/ListLayout.svelte";
	import SearchLayout from "../../layouts/SearchLayout.svelte";
	import PageSelector from "../../molecules/list/PageSelector.svelte";
	import PointListItem from "../../molecules/list/PointListItem.svelte";
	import TwoValueGreyText from "../../molecules/list/TwoValueGreyText.svelte";
	import Search from "../../molecules/search/Search.svelte";

	let searchQuery: string = "";

	let curPage: number = 1;
	let maxPage: number = 20;
	let rangeMin: number = 1;
</script>

<SearchLayout>
	<SpaceBetween gap="20px" alignItems="end">
		<Search onEnter={() => console.log(searchQuery)} value={searchQuery} />
	</SpaceBetween>
</SearchLayout>

<ListLayout>
	<ListItemLayout head={true}>
		<TwoValueGreyText width="20%" val1="이메일" val2="닉네임" />
		<GreyText width="25%">포인트 내용</GreyText>
		<GreyText width="12%">포인트</GreyText>
		<GreyText width="12%">지급일</GreyText>
		<GreyText width="12%">만료일</GreyText>
		<GreyText width="12%">잔여 포인트</GreyText>
	</ListItemLayout>
	<PointListItem />
</ListLayout>

<PageSelector {curPage} {maxPage} {rangeMin} />

<script lang="ts">
	import SpaceBetween from "../../atoms/layouts/SpaceBetween.svelte";
	import GreyText from "../../atoms/texts/GreyText.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import ListLayout from "../../layouts/ListLayout.svelte";
	import SearchLayout from "../../layouts/SearchLayout.svelte";
	import ManagerListItem from "../../molecules/list/ManagerListItem.svelte";
	import PageSelector from "../../molecules/list/PageSelector.svelte";
	import Search from "../../molecules/search/Search.svelte";
	import ManagerAddPanel from "./ManagerAddPanel.svelte";

	let searchQuery: string = "";

	let curPage: number = 1;
	let maxPage: number = 20;
	let rangeMin: number = 1;

	let selected = 0;
</script>

<ManagerAddPanel bind:itemId={selected} />

<SearchLayout>
	<SpaceBetween gap="20px" alignItems="end">
		<Search onEnter={() => console.log(searchQuery)} value={searchQuery} />
	</SpaceBetween>
</SearchLayout>

<ListLayout>
	<ListItemLayout head={true}>
		<GreyText width="12%">관리자번호</GreyText>
		<GreyText width="25%">이메일</GreyText>
		<GreyText width="12%">등급</GreyText>
		<GreyText width="12%">닉네임</GreyText>
		<GreyText width="15%">소속</GreyText>
		<GreyText width="12%">상태</GreyText>
	</ListItemLayout>
	<ManagerListItem />
</ListLayout>

<PageSelector {curPage} {maxPage} {rangeMin} />

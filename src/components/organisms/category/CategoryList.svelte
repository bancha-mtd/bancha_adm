<script lang="ts">
	import SpaceBetween from "../../atoms/layouts/SpaceBetween.svelte";
	import GreyText from "../../atoms/texts/GreyText.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import ListLayout from "../../layouts/ListLayout.svelte";
	import SearchLayout from "../../layouts/SearchLayout.svelte";
	import CategoryListItem from "../../molecules/list/CategoryListItem.svelte";
	import PageSelector from "../../molecules/list/PageSelector.svelte";
	import Search from "../../molecules/search/Search.svelte";
	import TransparentSelect from "../../molecules/search/TransparentSelect.svelte";
	import APIs from "../../utils/APIs";
	import type { SelectType } from "../../utils/Types";
	import Loading from "../../molecules/loading/Loading.svelte";
	import { onMount } from "svelte";

	export let needUpdate;
	$: if (needUpdate) {
		getCategories(1);
		needUpdate = false;
	}

	let sortIsActive: SelectType[] = [
		{ id: 1, name: "전체", value: -1 },
		{ id: 2, name: "사용 중", value: true },
	];
	let searchQuery: string = "";
	let selectedIsActive: SelectType = sortIsActive[0];

	let curPage: number = 1;
	let maxPage: number = 1;
	let rangeMin: number = 1;

	let list = [];
	let loading = true;

	onMount(() => {
		getCategories(1);
	});

	const getCategories = (page: number) => {
		loading = true;

		let option = { pageSize: 10 };
		option["pageNum"] = 1;
		if (searchQuery !== "") {
			option["title"] = searchQuery;
		}
		if (selectedIsActive.value !== -1) {
			option["useYn"] = selectedIsActive.value;
		}
		console.log(option);
		APIs.getCategory(option).then((res) => {
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
	const search = () => {
		getCategories(1);
		curPage = 1;
		rangeMin = 1;
	};
</script>

<SearchLayout>
	<SpaceBetween gap="20px" alignItems="end">
		<Search onEnter={search} value={searchQuery} />
		<TransparentSelect lists={sortIsActive} selected={selectedIsActive} />
	</SpaceBetween>
</SearchLayout>

<ListLayout>
	<ListItemLayout gap="2%" head={true}>
		<GreyText width="10%">코드</GreyText>
		<GreyText width="30%">카테고리명</GreyText>
		<GreyText width="10%">상품수</GreyText>
		<GreyText width="10%">노출</GreyText>
		<GreyText width="10%">노출순위</GreyText>
		<GreyText width="10%">아이콘</GreyText>
	</ListItemLayout>
	{#if loading}
		<Loading />
	{:else}
		{#each list as item}
			<CategoryListItem {item} />
		{/each}
	{/if}
</ListLayout>

<PageSelector bind:curPage {maxPage} bind:rangeMin onClick={getCategories} />

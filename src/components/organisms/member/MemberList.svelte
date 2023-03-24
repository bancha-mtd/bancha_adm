<script lang="ts">
	import { onMount } from "svelte";
	import { push } from "svelte-spa-router";
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import SpaceBetween from "../../atoms/layouts/SpaceBetween.svelte";
	import GreyText from "../../atoms/texts/GreyText.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import ListLayout from "../../layouts/ListLayout.svelte";
	import SearchLayout from "../../layouts/SearchLayout.svelte";
	import MemberListItem from "../../molecules/list/MemberListItem.svelte";
	import PageSelector from "../../molecules/list/PageSelector.svelte";
	import TwoValueGreyText from "../../molecules/list/TwoValueGreyText.svelte";
	import Loading from "../../molecules/loading/Loading.svelte";
	import Search from "../../molecules/search/Search.svelte";
	import Select from "../../molecules/search/Select.svelte";
	import TransparentSelect from "../../molecules/search/TransparentSelect.svelte";
	import APIs from "../../utils/APIs";
	import type { SelectType } from "../../utils/Types";

	let searchStandards: SelectType[] = [
		{ id: 1, name: "아이디", value: 1 },
		{ id: 2, name: "닉네임", value: 2 },
		{ id: 3, name: "연락처", value: 3 },
		{ id: 4, name: "지역", value: 4 },
	];
	let sortStandards: SelectType[] = [
		{ id: 1, name: "가입일순", value: "new" },
		{ id: 2, name: "후기순", value: "review" },
		{ id: 3, name: "구매수순", value: "buyCnt" },
		{ id: 4, name: "구매금액순", value: "paid" },
	];
	let sortOrder: SelectType[] = [
		{ id: 1, name: "내림차순", value: "desc" },
		{ id: 2, name: "오름차순", value: "asc" },
	];
	let sortGrade: SelectType[] = [
		{ id: 1, name: "등급 전체", value: -1 },
		{ id: 2, name: "VIP", value: 1 },
		{ id: 3, name: "반차 절친", value: 2 },
		{ id: 4, name: "반차 친구", value: 3 },
	];
	let searchQuery: string = "";
	let selectedSearchStandard: SelectType = searchStandards[0];
	let selectedStandard: SelectType = sortStandards[0];
	let selectedOrder: SelectType = sortOrder[0];
	let selectedGrade: SelectType = sortGrade[0];

	let curPage: number = 1;
	let maxPage: number = 20;
	let rangeMin: number = 1;

	let list = [];
	let loading = true;

	onMount(() => {
		getMembers(1);
	});

	const getMembers = (page: number) => {
		loading = true;

		let option = { pageSize: 10 };
		option["pageNum"] = page;
		if (searchQuery !== "") {
			if (selectedSearchStandard.value === 1) {
				option["email"] = searchQuery;
			} else if (selectedSearchStandard.value === 2) {
				option["nickname"] = searchQuery;
			} else if (selectedSearchStandard.value === 3) {
				option["cellphone"] = searchQuery;
			} else if (selectedSearchStandard.value === 4) {
				option["locaion"] = searchQuery;
			}
		}
		option["sortType"] = selectedStandard.value;
		option["sortDirection"] = selectedOrder.value;
		if (selectedGrade.value !== -1) {
			option["grade"] = selectedGrade.value;
		}

		APIs.getMember(option).then((res) => {
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

	let addMember = () => {
		push("/member/new");
	};
</script>

<SearchLayout>
	<SpaceBetween gap="20px" alignItems="end">
		<Select
			lists={searchStandards}
			bind:selected={selectedSearchStandard}
			borderRadius={true}
		/>
		<Search onEnter={() => getMembers(1)} bind:value={searchQuery} />
		<TransparentSelect lists={sortStandards} bind:selected={selectedStandard} />
		<TransparentSelect lists={sortOrder} bind:selected={selectedOrder} />
		<TransparentSelect lists={sortGrade} bind:selected={selectedGrade} />
	</SpaceBetween>
	<GreyBackgroundButton
		onClick={addMember}
		width="100px"
		height="30px"
		fontSize="16px">+ 회원 추가</GreyBackgroundButton
	>
</SearchLayout>

<ListLayout>
	<ListItemLayout head={true}>
		<GreyText width="10%">회원번호</GreyText>
		<TwoValueGreyText width="20%" val1="이메일" val2="닉네임" />
		<GreyText width="8%">등급</GreyText>
		<GreyText width="10%">연락처</GreyText>
		<GreyText width="10%">후기</GreyText>
		<GreyText width="10%">구매</GreyText>
		<GreyText width="10%">구매금액</GreyText>
		<GreyText width="8%">상태</GreyText>
		<TwoValueGreyText width="14%" val1="최종접속일" val2="가입일" />
	</ListItemLayout>
	{#if loading}
		<Loading />
	{:else}
		{#each list as item}
			<MemberListItem {item} />
		{/each}
	{/if}
</ListLayout>

<PageSelector bind:curPage {maxPage} bind:rangeMin onClick={getMembers} />

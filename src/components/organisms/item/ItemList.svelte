<script lang="ts">
  import { onMount } from "svelte";
  import { push } from "svelte-spa-router";
  import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
  import SpaceBetween from "../../atoms/layouts/SpaceBetween.svelte";
  import GreyText from "../../atoms/texts/GreyText.svelte";
  import ListItemLayout from "../../layouts/ListItemLayout.svelte";
  import ListLayout from "../../layouts/ListLayout.svelte";
  import SearchLayout from "../../layouts/SearchLayout.svelte";
  import ItemListItem from "../../molecules/list/ItemListItem.svelte";
  import PageSelector from "../../molecules/list/PageSelector.svelte";
  import Loading from "../../molecules/loading/Loading.svelte";
  import Search from "../../molecules/search/Search.svelte";
  import Select from "../../molecules/search/Select.svelte";
  import TransparentSelect from "../../molecules/search/TransparentSelect.svelte";
  import APIs from "../../utils/APIs";
  import type { SelectType } from "../../utils/Types";

  let searchStandards: SelectType[] = [
    { id: 1, name: "상품명", value: "productTitle" },
    { id: 2, name: "파트너", value: "partnerName" },
    { id: 3, name: "담당자", value: "managerName" },
    { id: 4, name: "지역", value: "address" },
    { id: 4, name: "상품코드", value: "productId" },
  ];
  let sortStandards: SelectType[] = [
    { id: 1, name: "등록일순", value: "new" },
    { id: 2, name: "조회수순", value: "views" },
    { id: 3, name: "판매량순", value: "sale" },
  ];
  let sortOrder: SelectType[] = [
    { id: 1, name: "내림차순", value: "desc" },
    { id: 2, name: "오름차순", value: "asc" },
  ];
  let sortIsActive: SelectType[] = [
    { id: 1, name: "전체", value: null },
    { id: 2, name: "판매중", value: true },
    { id: 3, name: "숨김", value: false },
  ];
  let searchQuery: string = "";
  let selectedSearchStandard: SelectType = searchStandards[0];
  let selectedStandard: SelectType = sortStandards[0];
  let selectedOrder: SelectType = sortOrder[0];
  let selectedIsActive: SelectType = sortIsActive[0];

  let curPage: number = 1;
  let maxPage: number = 20;
  let rangeMin: number = 1;

  let addItem = () => {
    push("/item/new");
  };

  let loading = true;
  let list = [];

  onMount(() => {
    getItems(1);
  });

  const getItems = (page: number) => {
    loading = true;

    let option = { pageSize: 10 };
    option["pageNum"] = page;
    if (searchQuery !== "") {
      option[selectedSearchStandard.value] = searchQuery;
    }
    option["sortType"] = selectedStandard.value;
    option["sortDirection"] = selectedOrder.value;
    if (selectedIsActive.value !== null) {
      option["useYn"] = selectedIsActive.value;
    }
    console.log(JSON.stringify(option));

    APIs.getItem(option).then((res) => {
      if (res.status === 200) {
        list = res.data.content;
        maxPage = res.data.totalPages;
        loading = false;
      } else {
        console.log(res.data);
        alert("불러오기 에러!");
      }
    });
    curPage = page;
  };

  const search = () => {
    getItems(1);
    curPage = 1;
    rangeMin = 1;
  };
</script>

<SearchLayout>
  <SpaceBetween gap="20px" alignItems="end">
    <Select
      lists={searchStandards}
      bind:selected={selectedSearchStandard}
      borderRadius={true}
    />
    <Search onEnter={search} bind:value={searchQuery} />
    <TransparentSelect lists={sortStandards} bind:selected={selectedStandard} />
    <TransparentSelect lists={sortOrder} bind:selected={selectedOrder} />
    <TransparentSelect lists={sortIsActive} bind:selected={selectedIsActive} />
  </SpaceBetween>
  <GreyBackgroundButton
    onClick={addItem}
    width="100px"
    height="30px"
    fontSize="16px">+ 상품 추가</GreyBackgroundButton
  >
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
  {#if loading}
    <Loading />
  {:else}
    {#each list as item}
      <ItemListItem {item} />
    {/each}
  {/if}
</ListLayout>

<PageSelector bind:curPage {maxPage} bind:rangeMin onClick={getItems} />

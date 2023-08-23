<script lang="ts">
  import { onMount } from "svelte";
  import SpaceBetween from "../../atoms/layouts/SpaceBetween.svelte";
  import GreyText from "../../atoms/texts/GreyText.svelte";
  import ListItemLayout from "../../layouts/ListItemLayout.svelte";
  import ListLayout from "../../layouts/ListLayout.svelte";
  import SearchLayout from "../../layouts/SearchLayout.svelte";
  import PageSelector from "../../molecules/list/PageSelector.svelte";
  import ReservationListItem from "../../molecules/list/ReservationListItem.svelte";
  import Search from "../../molecules/search/Search.svelte";
  import APIs from "../../utils/APIs";
  import Loading from "../../molecules/loading/Loading.svelte";

  let searchQuery: string = "";

  let curPage: number = 1;
  let maxPage: number = 20;
  let rangeMin: number = 1;

  let loading = true;
  let list = [];

  onMount(() => {
    getReservations(1);
  });

  const getReservations = (page: number) => {
    loading = true;
    APIs.getReservations().then((res) => {
      if (res.status === 200) {
        console.log(res);
        list = res.data;
        loading = false;
      } else {
        console.log(res.data);
        alert("불러오기 에러!");
      }
    });
    curPage = page;
  };

  const search = () => {
    getReservations(1);
    curPage = 1;
    rangeMin = 1;
  };
</script>

<SearchLayout>
  <SpaceBetween gap="20px" alignItems="end">
    <Search onEnter={() => console.log(searchQuery)} value={searchQuery} />
  </SpaceBetween>
</SearchLayout>

<ListLayout>
  <ListItemLayout head={true}>
    <GreyText width="12%">예약번호</GreyText>
    <GreyText width="12%">결제일자</GreyText>
    <GreyText width="12%">상태</GreyText>
    <GreyText width="12%">예약일</GreyText>
    <GreyText width="12%">예약자</GreyText>
    <GreyText width="28%">상품명</GreyText>
    <GreyText width="12%">결제금액</GreyText>
  </ListItemLayout>
  {#if loading}
    <Loading />
  {:else}
    {#each list as item}
      <ReservationListItem {item} />
    {/each}
  {/if}
</ListLayout>

<PageSelector {curPage} {maxPage} {rangeMin} />

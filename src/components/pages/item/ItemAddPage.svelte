<script lang="ts">
  import MainLayout from "../../layouts/MainLayout.svelte";
  import PageLayout from "../../layouts/PageLayout.svelte";
  import PageHeader from "../../molecules/header/PageHeader.svelte";

  const aToken = localStorage.getItem("accessToken");
  const rToken = localStorage.getItem("refreshToken");
  console.log(aToken, rToken);
</script>

<MainLayout>
  <PageHeader title="상품관리" />
  <PageLayout />
</MainLayout>

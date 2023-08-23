<script lang="ts">
  import LinkedText from "../../atoms/links/LinkedText.svelte";
  import Text from "../../atoms/texts/Text.svelte";
  import ListItemLayout from "../../layouts/ListItemLayout.svelte";
  import type { ReservationItem } from "../../utils/Types";
  import TwoValueText from "./TwoValueText.svelte";

  export let item: any;
</script>

<ListItemLayout>
  <button
    class="txt"
    on:click={() => {
      alert(JSON.stringify(item, null, 2));
    }}
  >
    {item.reservationNum}
  </button>
  <Text width="12%">
    {item.createTime.substr(0, 9)}
  </Text>
  <Text width="12%">
    {item.isCancel ? "취소" : "결제"}
  </Text>
  <Text width="12%">
    {item.reservationDate}
  </Text>
  <TwoValueText
    width="12%"
    val1={item.memberNickName}
    val2={item.phoneNumber}
  />
  <Text width="28%">
    {item.productTitle}
  </Text>
  <Text width="12%">
    {item.amount}
  </Text>
</ListItemLayout>

<style>
  .txt {
    width: 12%;
    font-size: 16px;
    text-align: center;
  }
</style>

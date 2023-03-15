<script lang="ts">
	import GreyText from "../../atoms/texts/GreyText.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import ListLayout from "../../layouts/ListLayout.svelte";
	import RefundListItem from "../../molecules/list/RefundListItem.svelte";
</script>

<ListLayout>
	<ListItemLayout head={true}>
		<GreyText width="30%">번호</GreyText>
		<GreyText width="70%">환불규정</GreyText>
	</ListItemLayout>
	<RefundListItem />
</ListLayout>

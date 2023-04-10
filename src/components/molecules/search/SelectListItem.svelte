<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";

	interface Item {
		id: number;
		title: string;
	}

	export let item: Item = {
		id: 0,
		title: "상품명",
	};
	export let unselect: (item: object) => void;
</script>

<ListItemLayout height="30px">
	<Text fontSize="14px" width="20%">{item.id}</Text>
	<Text fontSize="14px" width="60%">{item.title}</Text>
	<div>
		<GreyBackgroundButton
			width="50px"
			height="24px"
			fontSize="14px"
			onClick={() => {
				unselect(item);
			}}>삭제</GreyBackgroundButton
		>
	</div>
</ListItemLayout>

<style>
	div {
		width: 20%;
		display: flex;
		justify-content: center;
	}
</style>

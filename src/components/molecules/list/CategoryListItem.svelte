<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import Image from "../../atoms/images/Image.svelte";
	import BorderedInput from "../../atoms/inputs/BorderedInput.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";

	interface CategoryItem {
		id: string;
		title: string;
		items: string;
		active: string;
		priority: string;
		icon: string;
	}

	export let item: CategoryItem = {
		id: "코드",
		title: "제목",
		items: "상품수",
		active: "노출",
		priority: "순위",
		icon: "src\\assets\\svelte.svg",
	};
	export let modify: () => void = () => {
		console.log(item);
	};
</script>

<ListItemLayout>
	<Text width="12%">{item.id}</Text>
	<BorderedInput bind:value={item.title} width="30%" />
	<Text width="12%">{item.items}</Text>
	<BorderedInput bind:value={item.active} width="12%" />
	<BorderedInput bind:value={item.priority} width="12%" />
	<div>
		<Image src={item.icon} />
	</div>
	<GreyBackgroundButton height="30px" fontSize="16px" onClick={modify}
		>수정</GreyBackgroundButton
	>
</ListItemLayout>

<style>
	div {
		width: 12%;
		text-align: center;
	}
</style>

<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import Image from "../../atoms/images/Image.svelte";
	import BorderedInput from "../../atoms/inputs/BorderedInput.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";

	export let id: string = "코드";
	export let title: string = "카테고리명";
	export let items: string = "상품수";
	export let active: string = "노출";
	export let priority: string = "노출순위";
	export let icon: string = "src\\assets\\svelte.svg";
	export let modify: () => void = () => {
		console.log(id, title, items, active, priority, icon);
	};
</script>

<ListItemLayout>
	<Text width="12%">{id}</Text>
	<BorderedInput bind:value={title} width="30%" />
	<Text width="12%">{items}</Text>
	<BorderedInput bind:value={active} width="12%" />
	<BorderedInput bind:value={priority} width="12%" />
	<div>
		<Image src={icon} />
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

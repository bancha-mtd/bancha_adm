<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import Image from "../../atoms/images/Image.svelte";
	import BorderedInput from "../../atoms/inputs/BorderedInput.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import ListItemLayout from "../../layouts/ListItemLayout.svelte";
	import type { CategoryItem, SelectType } from "../../utils/Types";
	import Select from "../search/Select.svelte";
	import APIs from "../../utils/APIs";

	export let item: CategoryItem = {
		id: -1,
		name: "제목",
		productCount: "상품수",
		useYn: true,
		recommendNum: "순위",
		thumbnailImageUrl: "src\\assets\\svelte.svg",
	};
	const isActive: SelectType[] = [
		{ id: 1, name: "Y", value: true },
		{ id: 2, name: "N", value: false },
	];
	let selectedIsActive: SelectType = item.useYn ? isActive[0] : isActive[1];
	let file: Blob;
	let inputElement;

	const modifyImg = () => {
		inputElement.click();
	};
	const fileHandler = (e) => {
		file = e.target.files[0];
		item.thumbnailImageUrl = URL.createObjectURL(file);
	};

	const modify: () => void = () => {
		let option = {
			id: item.id,
			name: item.name,
			recommendNum: item.recommendNum,
			useYn: selectedIsActive.value,
		};
		APIs.editCategory(option).then((res) => {
			if (res.status === 200) {
				if (file) {
					let frm = new FormData();
					frm.append("files", file, `${item.id}_${file.name}`);
					APIs.editCategoryImg(frm, item.id).then((res) => {
						if (res.status === 200) alert("수정 완료");
					});
				} else {
					alert("수정 완료");
				}
			}
		});
	};
</script>

<ListItemLayout gap="2%">
	<Text width="10%">{item.id}</Text>
	<BorderedInput bind:value={item.name} width="30%" fontSize="16px" />
	<Text width="10%">{item.productCount}</Text>
	<Select
		lists={isActive}
		bind:selected={selectedIsActive}
		width="10%"
		height="30px"
		fontSize="16px"
	/>
	<BorderedInput fontSize="16px" bind:value={item.recommendNum} width="10%" />
	<button on:click={modifyImg}>
		<Image src={item.thumbnailImageUrl} />
		<input
			accept="image/*"
			bind:this={inputElement}
			type="file"
			bind:value={file}
			on:change={fileHandler}
		/>
	</button>
	<GreyBackgroundButton height="30px" fontSize="16px" onClick={modify}
		>수정</GreyBackgroundButton
	>
</ListItemLayout>

<style>
	button {
		width: 12%;
		text-align: center;
	}
	input {
		display: none;
	}
</style>

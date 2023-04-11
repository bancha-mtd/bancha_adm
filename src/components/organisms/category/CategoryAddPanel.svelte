<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import BorderedInput from "../../atoms/inputs/BorderedInput.svelte";
	import BoldText from "../../atoms/texts/BoldText.svelte";
	import DetailPanelLayout from "../../layouts/DetailPanelLayout.svelte";
	import SearchLayout from "../../layouts/SearchLayout.svelte";
	import DetailRow from "../../molecules/detail/DetailRow.svelte";
	import Radio from "../../molecules/detail/Radio.svelte";
	import APIs from "../../utils/APIs";
	import type { SelectType } from "../../utils/Types";
	import DropZone from "../prescreen/DropZone.svelte";

	export let needUpdate;

	const isActive: SelectType[] = [
		{ id: 1, name: "Y", value: true },
		{ id: 2, name: "N", value: false },
	];
	let title: string;
	let recommendNum: number = 0;
	let selectedIsActive: SelectType = isActive[0];
	let file: Blob;

	const addCategory: () => void = () => {
		if (file === undefined) {
			alert("아이콘을 등록해주세요!");
			return;
		}
		let option = {
			name: title,
			recommendNum: recommendNum,
			useYn: selectedIsActive.value,
		};
		let frm = new FormData();
		console.log(file);
		frm.append("files", file, file.name);
		frm.append(
			"requestDTO",
			new Blob([JSON.stringify(option)], { type: "application/json" })
		);
		APIs.addCategory(frm).then((res) => {
			if (res.status === 200) {
				console.log(res);
				alert("등록 완료");
				needUpdate = true;
			}
		});
	};
</script>

<SearchLayout>
	<BoldText fontSize="18px">카테고리 추가</BoldText>
	<GreyBackgroundButton
		onClick={addCategory}
		width="60px"
		height="30px"
		fontSize="16px">추가</GreyBackgroundButton
	>
</SearchLayout>
<DetailPanelLayout marginBottom={true}>
	<DetailRow title="카테고리명">
		<BorderedInput alignCenter={false} width="80%" bind:value={title} />
	</DetailRow>
	<DetailRow title="노출">
		<Radio
			name="active"
			bind:value={selectedIsActive}
			height="30px"
			width="80px"
			fontSize="16px"
			lists={isActive}
		/>
	</DetailRow>
	<DetailRow title="노출 순위">
		<BorderedInput type="number" bind:value={recommendNum} />
	</DetailRow>
	<DetailRow title="아이콘">
		<DropZone bind:file width="90px" height="90px" />
	</DetailRow>
</DetailPanelLayout>

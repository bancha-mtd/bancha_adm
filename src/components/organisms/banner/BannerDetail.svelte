<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import DetailRow from "../../molecules/detail/DetailRow.svelte";
	import SpaceEnd from "../../atoms/layouts/SpaceEnd.svelte";
	import DetailPanelLayout from "../../layouts/DetailPanelLayout.svelte";
	import BorderedInput from "../../atoms/inputs/BorderedInput.svelte";
	import Radio from "../../molecules/detail/Radio.svelte";
	import LightGreyText from "../../atoms/texts/LightGreyText.svelte";
	import { onMount } from "svelte";
	import type { SelectType } from "../../utils/Types";
	import APIs from "../../utils/APIs";
	import { push } from "svelte-spa-router";
	import Image from "../../atoms/images/Image.svelte";
	import GreyText from "../../atoms/texts/GreyText.svelte";
	import FlexCol from "../../atoms/layouts/FlexCol.svelte";

	export let itemId: string;

	let item = {
		id: -1,
		title: "",
		useYn: true,
		priority: "0",
		dateBegin: "시작일자",
		dateEnd: "종료 일자",
		url: "",
		imageUrl: "",
	};
	let file: Blob;
	let useYns: SelectType[] = [
		{ id: 1, name: "예", value: true },
		{ id: 1, name: "아니요", value: false },
	];
	let useYn: SelectType = useYns[0];

	onMount(() => {
		if (itemId !== "new") getBanner();
	});

	const getBanner = () => {
		APIs.getBannerDetail(itemId).then((res) => {
			item = res.data;
			useYn = res.data.useYn ? useYns[0] : useYns[1];
		});
	};

	const deleteItem = () => {
		item.useYn = false;
		delete item.imageUrl;
		let frm = new FormData();
		frm.append(
			"banner",
			new Blob([JSON.stringify(item)], { type: "application/json" })
		);
		APIs.editBanner(frm).then((res) => {
			if (res.status === 200) {
				alert("비활성화 되었습니다.");
			} else {
				alert("오류가 발생했습니다.");
			}
		});
	};
	const addItem = () => {
		item.useYn = useYn.value;
		delete item.imageUrl;
		delete item.id;
		let frm = new FormData();
		frm.append("image", file);
		frm.append(
			"banner",
			new Blob([JSON.stringify(item)], { type: "application/json" })
		);
		APIs.addBanner(frm).then((res) => {
			if (res.status === 200) {
				alert("등록 완료");
				push("/banner");
			} else {
				alert("오류가 발생했습니다.");
			}
		});
	};
	const modifyItem = () => {
		item.useYn = useYn.value;
		delete item.imageUrl;
		let frm = new FormData();
		frm.append("image", file);
		frm.append(
			"banner",
			new Blob([JSON.stringify(item)], { type: "application/json" })
		);
		APIs.editBanner(frm).then((res) => {
			if (res.status === 200) {
				alert("수정 완료");
				getBanner();
			} else {
				alert("오류가 발생했습니다.");
			}
		});
	};

	const fileHandler = (e) => {
		file = e.target.files[0];
		item.imageUrl = URL.createObjectURL(file);
	};
</script>

<SpaceEnd gap="10px" marginBottom="20px">
	{#if item.id !== -1}
		<GreyBackgroundButton
			width="50px"
			height="30px"
			fontSize="16px"
			onClick={deleteItem}>삭제</GreyBackgroundButton
		>
	{/if}
	<GreyBackgroundButton
		width="50px"
		height="30px"
		fontSize="16px"
		onClick={item.id !== -1 ? modifyItem : addItem}
		>{item.id !== -1 ? "수정" : "등록"}</GreyBackgroundButton
	>
</SpaceEnd>
<DetailPanelLayout height="calc(100vh - 190px)">
	<DetailRow head={true} title="코드">
		<BorderedInput
			height="30px"
			fontSize="16px"
			disabled={true}
			value={item.id}
		/>
	</DetailRow>
	<DetailRow title="제목">
		<BorderedInput
			alignCenter={false}
			fontSize="16px"
			width="80%"
			bind:value={item.title}
		/>
	</DetailRow>
	<DetailRow title="노출">
		<Radio
			name="active"
			bind:value={useYn}
			height="30px"
			width="80px"
			fontSize="16px"
			lists={useYns}
		/>
	</DetailRow>
	<DetailRow title="노출순위">
		<BorderedInput type="number" fontSize="16px" bind:value={item.priority} />
	</DetailRow>
	<DetailRow title="시작일자">
		<GreyText width="170px" fontSize="16px"
			>{item.dateBegin.replace("T", " ")}</GreyText
		>
		<BorderedInput
			fontSize="16px"
			type="datetime-local"
			width="200px"
			bind:value={item.dateBegin}
		/>
	</DetailRow>
	<DetailRow title="종료일자">
		<GreyText width="170px" fontSize="16px"
			>{item.dateEnd.replace("T", " ")}</GreyText
		>
		<BorderedInput
			fontSize="16px"
			type="datetime-local"
			width="200px"
			bind:value={item.dateEnd}
		/>
	</DetailRow>
	<DetailRow title="링크">
		<BorderedInput
			alignCenter={false}
			fontSize="16px"
			width="40%"
			bind:value={item.url}
		/>
		<LightGreyText width="210px" fontSize="12px"
			>앱 내 이동은 형식에 맞게 작성해주세요</LightGreyText
		>
	</DetailRow>
	<DetailRow title="이미지">
		<FlexCol
			><Image width="70%" height="350px" src={item.imageUrl} />
			<input
				accept="image/*"
				type="file"
				bind:value={file}
				on:change={fileHandler}
			/>
		</FlexCol>
	</DetailRow>
</DetailPanelLayout>

<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import DetailRow from "../../molecules/detail/DetailRow.svelte";
	import SpaceEnd from "../../atoms/layouts/SpaceEnd.svelte";
	import DetailPanelLayout from "../../layouts/DetailPanelLayout.svelte";
	import BorderedInput from "../../atoms/inputs/BorderedInput.svelte";
	import SpaceAround from "../../atoms/layouts/SpaceAround.svelte";
	import Select from "../../molecules/search/Select.svelte";
	import LabeledBorderedInput from "../../molecules/detail/LabeledBorderedInput.svelte";
	import LightGreyText from "../../atoms/texts/LightGreyText.svelte";
	import type { SelectType } from "../../utils/Types";
	import Radio from "../../molecules/detail/Radio.svelte";
	import FlexCol from "../../atoms/layouts/FlexCol.svelte";
	import Image from "../../atoms/images/Image.svelte";
	import APIs from "../../utils/APIs";
	import { onMount } from "svelte";

	export let itemId: string;
	let tfile: Blob;
	let dfile: Blob;

	const tfileHandler = (e) => {
		tfile = e.target.files[0];
		item.titleImg = URL.createObjectURL(tfile);
	};
	const dfileHandler = (e) => {
		dfile = e.target.files[0];
		item.detailImg = URL.createObjectURL(dfile);
	};

	let item = {
		id: "new",
		title: "",
		fromDate: "",
		endDate: "",
		detailImg: "",
		titleImg: "",
		useYn: true,
	};

	const deleteItem = () => {
		return;
	};
	const addItem = () => {
		delete item.titleImg;
		delete item.detailImg;
		delete item.id;
		delete item.useYn;

		let frm = new FormData();
		frm.append("thumbnail", tfile);
		frm.append("image", dfile);
		frm.append(
			"req",
			new Blob([JSON.stringify(item)], { type: "application/json" })
		);

		APIs.addEvent(frm).then((res) => {
			if (res.status === 200) {
				alert("등록 완료");
			} else {
				alert("오류가 발생했습니다.");
			}
		});
		return;
	};

	let eventId;
	onMount(() => {
		const urlParts = window.location.href.split("/");
		eventId = urlParts[urlParts.length - 1];

		if (eventId !== "new") getItemDetail();
	});

	const getItemDetail = () => {
		APIs.getEventDetail(eventId).then((res) => {
			const responseData = res.data;
			const allowedKeys = Object.keys(item);

			item.id = responseData.id;
			item.title = responseData.title;
			item.fromDate = responseData.fromDate;
			item.endDate = responseData.endDate;
			item.detailImg = responseData.imageUrl;
			item.titleImg = responseData.thumbnailUrl;
		});
	};

	const modifyItem = () => {
		delete item.titleImg;
		delete item.detailImg;
		//delete item.useYn;

		let frm = new FormData();
		frm.append(
			"req",
			new Blob([JSON.stringify(item)], { type: "application/json" })
		);
		frm.append("thumbnail", item.titleImg);
		frm.append("image", item.detailImg);

		APIs.editEvent(frm, eventId).then((res) => {
			if (res.status === 200) {
				alert("수정 완료");
			} else {
				alert("오류가 발생했습니다.");
			}
			console.log(JSON.stringify(item));
			return;
		});
	};
</script>

<SpaceEnd gap="10px" marginBottom="20px">
	<div>{itemId}</div>
	{#if item.id !== "new"}
		<GreyBackgroundButton height="30px" fontSize="16px" onClick={deleteItem}
			>삭제</GreyBackgroundButton
		>``
	{/if}
	<GreyBackgroundButton
		width="50px"
		height="30px"
		fontSize="16px"
		onClick={eventId !== "new" ? modifyItem : addItem}
		>{#if eventId !== "new"}수정{:else}등록{/if}</GreyBackgroundButton
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
		<BorderedInput fontSize="16px" width="80%" bind:value={item.title} />
	</DetailRow>

	<DetailRow title="시작일자">
		<BorderedInput
			fontSize="16px"
			type="datetime-local"
			bind:value={item.fromDate}
		/>
	</DetailRow>
	<DetailRow title="종료일자">
		<BorderedInput
			fontSize="16px"
			type="datetime-local"
			bind:value={item.endDate}
		/>
	</DetailRow>
	<DetailRow title="상세페이지">
		<FlexCol
			><Image width="70%" height="350px" src={item.detailImg} />
			<input
				accept="image/*"
				type="file"
				bind:value={dfile}
				on:change={dfileHandler}
			/>
		</FlexCol>
	</DetailRow>
	<DetailRow title="제목이미지">
		<FlexCol
			><Image width="70%" height="350px" src={item.titleImg} />
			<input
				accept="image/*"
				type="file"
				bind:value={tfile}
				on:change={tfileHandler}
			/>
		</FlexCol>
	</DetailRow>
</DetailPanelLayout>

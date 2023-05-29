<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import YellowBackgroundButton from "../../atoms/buttons/YellowBackgroundButton.svelte";
	import DetailRow from "../../molecules/detail/DetailRow.svelte";
	import SpaceEnd from "../../atoms/layouts/SpaceEnd.svelte";
	import DetailPanelLayout from "../../layouts/DetailPanelLayout.svelte";
	import BorderedInput from "../../atoms/inputs/BorderedInput.svelte";
	import SpaceAround from "../../atoms/layouts/SpaceAround.svelte";
	import Select from "../../molecules/search/Select.svelte";
	import LabeledBorderedInput from "../../molecules/detail/LabeledBorderedInput.svelte";
	import Radio from "../../molecules/detail/Radio.svelte";
	import CheckBox from "../../molecules/detail/CheckBox.svelte";
	import FlexCol from "../../atoms/layouts/FlexCol.svelte";
	import DetailRowLayout from "../../atoms/layouts/DetailRowLayout.svelte";
	import DetailRowTitle from "../../atoms/texts/DetailRowTitle.svelte";
	import LightGreyText from "../../atoms/texts/LightGreyText.svelte";
	import BoldText from "../../atoms/texts/BoldText.svelte";
	import type { SelectType } from "../../utils/Types";
  import BorderedTextArea from "../../atoms/inputs/BorderedTextArea.svelte";

	export let itemId: string;

	let managers: string[];
	let partners: string[];
	let categories: SelectType[] = [{ id: -1, name: "", value: -1 }];
	let targets: SelectType[] = [{id: 1, name: "키즈", value: "kids"}, {id: 2, name: "키즈패밀리", value: "kidsfamily"}, {id: 3, name: "부모", value: "parent"}];
	let types: SelectType[]=[
				{ id: 1, name: "반차 기획", value: 1 },
				{ id: 2, name: "판매자 기획", value: 2 },
			];
	let autoConfirms:SelectType[] = [
				{ id: 1, name: "예약 확정 대기", value: 1 },
				{ id: 2, name: "예약 자동 확정", value: 2 },
			];
	let refundTypes: SelectType[] = [
				{ id: 1, name: "환불 불가", value: 1 },
				{ id: 2, name: "당일 환불 100%", value: 2 },
				{ id: 2, name: "1일전 환불 100%", value: 3 },
				{ id: 2, name: "3일전 환불 100%", value: 4 },
				{ id: 2, name: "7일전 환불 100%", value: 5 },]
	let discountedPercentage = 0;
	let item = {
		id: -1,
		manager: "",
		partner: "",
		category1: categories[0],
		category2: categories[0],
		category3: categories[0],
		target: targets[0],
		type: types[0],
		title: "",
		subtitle: "",
		hashtags: "",
		peopleStandard: "",
		peopleMin: "",
		peopleMax: "",
		ageStandard: "",
		ageMin: "",
		ageMax: "",
		estimatedTime: "",
		autoConfirm: autoConfirms[0],
		activeDay: [false, false, false, false, false, false, false],
		itemPoint: "",
		includes: "",
		excludes: "",
		price: "",
		discountedPrice: "",
		label: "",
		notice: "",
		thumbnail01: null,
		thumbnail02: null,
		thumbnail03: null,
		thumbnail04: null,
		thumbnail05: null,

		detailImage: "",
		teacherIntro: "",
		curriculum: "",
		timeTable: "",
		checkList: "",

		sigungu: "",
		postcode: "",
		address: "",
		refundType: refundTypes[0]
	};

	const deleteItem = () => {
		return;
	};
	const addItem = () => {
		console.log(item);
		return;
	};
	const modifyItem = () => {
		console.log(item);
		return;
	};
	const preview = () => {
		return;
	};
	$: discountedPercentage =
		(100 * (Number(item.price) - Number(item.discountedPrice))) /
		Number(item.price);

		
	function findAddr() {
		new daum.Postcode({
			oncomplete: function (data) {
				console.log(data);
				item.postcode = data.zonecode;
				item.sigungu = data.sigungu;
				item.address = data.roadAddress;
			},
		}).open();
	}
</script>

<svelte:head>
	<script
		src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
	></script>
</svelte:head>

<SpaceEnd gap="10px" marginBottom="20px">
	<div>{itemId}</div>
	{#if item.manager !== ""}
		<GreyBackgroundButton height="30px" fontSize="16px" onClick={deleteItem}
			>삭제</GreyBackgroundButton
		>
	{/if}
	<GreyBackgroundButton
		width="50px"
		height="30px"
		fontSize="16px"
		onClick={item.manager !== "" ? modifyItem : addItem}
		>{item.manager !== "" ? "수정" : "등록"}</GreyBackgroundButton
	>
	<YellowBackgroundButton
		onClick={preview}
		width="80px"
		height="30px"
		fontSize="16px">미리보기</YellowBackgroundButton
	>
</SpaceEnd>
<DetailPanelLayout height="calc(100vh - 190px)">
	<div class="title">
		<BoldText fontSize="20px">기본 정보</BoldText>
	</div>
	<DetailRow head={true} title="상품코드">
		<BorderedInput
			height="30px"
			fontSize="16px"
			disabled={true}
			value={item.id.toLocaleString()}
		/>
	</DetailRow>
	<DetailRow title="담당자">
		<BorderedInput list="manager" bind:value={item.manager} />
		<!-- <datalist id="manager">
			<option value="이나" /><option value="아리" /><option
				value="메이"
			/><option value="딘" /></datalist
		> -->
	</DetailRow>
	<DetailRow title="파트너">
		<BorderedInput list="partner" bind:value={item.partner} />
		<!-- <datalist id="manager">
			<option value="이나" /><option value="아리" /><option
				value="메이"
			/><option value="딘" /></datalist
		> -->
	</DetailRow>
	<DetailRow title="카테고리">
		<SpaceAround gap="30px">
			<Select
				lists={categories}
				selected={item.category1}
				fontSize="16px"
				height="30px"
			/>
			<Select
				lists={categories}
				selected={item.category2}
				fontSize="16px"
				height="30px"
			/>
			<Select
				lists={categories}
				selected={item.category3}
				fontSize="16px"
				height="30px"
			/>
		</SpaceAround>
	</DetailRow>
	<DetailRow title="타겟">
		<Select
				lists={targets}
				selected={item.target}
				fontSize="16px"
				height="30px"
			/>
	</DetailRow>
	<DetailRow title="유형">
		<Radio
			name="type"
			bind:value={item.type}
			height="30px"
			fontSize="16px"
			lists={types}
		/>
	</DetailRow>
	<DetailRow title="상품명">
		<BorderedInput alignCenter={false} width="80%" bind:value={item.title} />
	</DetailRow>
	<DetailRow title="부제목">
		<BorderedInput alignCenter={false} width="80%" bind:value={item.subtitle} />
	</DetailRow>
	<DetailRow title="해시태그">
		<BorderedInput alignCenter={false} width="80%" bind:value={item.hashtags} />
	</DetailRow>
	<DetailRowLayout>
		<div class="half">
			<DetailRowTitle>가격</DetailRowTitle>
			<BorderedInput type="number" bind:value={item.price} />
		</div>
		<div class="half">
			<DetailRowTitle>할인 후 가격</DetailRowTitle>
			<BorderedInput type="number" bind:value={item.discountedPrice} />
			<LightGreyText marginLeft="8px" fontSize="16px"
				>{discountedPercentage}%</LightGreyText
			>
		</div>
	</DetailRowLayout>
	<DetailRow title="인원">
		<SpaceAround gap="30px">
			<LabeledBorderedInput
				bind:value={item.peopleStandard}
				pre="기준"
				post=""
			/>
			<LabeledBorderedInput
				width="50px"
				bind:value={item.peopleMin}
				pre="최소"
				post="인"
			/>
			<LabeledBorderedInput
				width="50px"
				bind:value={item.peopleMax}
				pre="최대"
				post="인"
			/>
		</SpaceAround>
	</DetailRow>
	<DetailRow title="적정연령">
		<SpaceAround gap="30px">
			<LabeledBorderedInput
				width="50px"
				bind:value={item.ageStandard}
				pre=""
				post="세"
			/>
			<LabeledBorderedInput
				width="50px"
				bind:value={item.ageMin}
				pre="(최소"
				post="세"
			/>
			<LabeledBorderedInput
				width="50px"
				bind:value={item.ageMax}
				pre="최대"
				post="세)"
			/>
		</SpaceAround>
	</DetailRow>
	<DetailRow title="소요시간">
		<LabeledBorderedInput pre="" post="시간" bind:value={item.estimatedTime} />
	</DetailRow>
	<DetailRow title="자동확정여부">
		<Radio
			name="autoConfirm"
			bind:value={item.autoConfirm}
			height="30px"
			fontSize="16px"
			lists={autoConfirms}
		/>
	</DetailRow>
	<DetailRow title="체험포인트">
		<BorderedTextArea bind:value={item.itemPoint} />
	</DetailRow>
	<DetailRow title="포함/불포함">
		<FlexCol gap="10px">
			<LabeledBorderedInput
				pre="포함"
				post=""
				width="700px"
				preWidth="70px"
				bind:value={item.includes}
			/>
			<LabeledBorderedInput
				pre="불포함"
				post=""
				width="700px"
				preWidth="70px"
				bind:value={item.excludes}
			/>
		</FlexCol>
	</DetailRow>
	<DetailRow title="공지사항">
		<BorderedTextArea bind:value={item.notice} height="300px" />
	</DetailRow>
	<DetailRow title="라벨">
		<BorderedInput bind:value={item.label} />
		<LightGreyText fontSize="14px" marginLeft="10px"
			>미사용 시 빈칸으로 유지</LightGreyText
		>
	</DetailRow>
	<DetailRow title="썸네일">
		<FlexCol gap="10px">
			<LabeledBorderedInput
				pre="1번"
				post=""
				width="700px"
				preWidth="70px"
				bind:value={item.thumbnail01}
			/>
			<LabeledBorderedInput
				pre="2번"
				post=""
				width="700px"
				preWidth="70px"
				bind:value={item.thumbnail02}
			/>
			<LabeledBorderedInput
				pre="3번"
				post=""
				width="700px"
				preWidth="70px"
				bind:value={item.thumbnail03}
			/>
			<LabeledBorderedInput
				pre="4번"
				post=""
				width="700px"
				preWidth="70px"
				bind:value={item.thumbnail04}
			/>
			<LabeledBorderedInput
				pre="5번"
				post=""
				width="700px"
				preWidth="70px"
				bind:value={item.thumbnail04}
			/>
		</FlexCol>
	</DetailRow>

	<div class="title"><BoldText fontSize="20px">캘린더(옵션 및 재고)</BoldText></div>
	<DetailRow title="요일">
		<CheckBox
			name="activeDay"
			bind:value={item.activeDay}
			width="70px"
			height="auto"
			fontSize="16px"
			lists={["월", "화", "수", "목", "금", "토", "일"]}
		/>
	</DetailRow>
	<DetailRow title="예외일정">
		<div />
	</DetailRow>
	<DetailRow title="예외일정">
		<div />
	</DetailRow>
	<div class="title"><BoldText fontSize="20px">상세정보</BoldText></div>
	<DetailRow title="상세 이미지" >
		<BorderedInput type="file" bind:value={item.detailImage} width="500px" />
	</DetailRow>
	<DetailRow title="선생님 소개">
		<BorderedTextArea bind:value={item.teacherIntro} height="300px" />
	</DetailRow>
	<DetailRow title="커리큘럼">
		<BorderedTextArea bind:value={item.curriculum} height="300px" />
	</DetailRow>
	<DetailRow title="시간표">
		<BorderedTextArea bind:value={item.timeTable} height="300px" />
	</DetailRow>
	<DetailRow title="체크리스트">
		<BorderedTextArea bind:value={item.checkList} height="300px" />
	</DetailRow>
	<div class="title"><BoldText fontSize="20px">기타정보</BoldText></div>
	<DetailRow title="위치">
		<FlexCol gap="10px">
			<div><BorderedInput
				bind:value={item.postcode}
				click={findAddr}
				fontSize="16px"
			/>	<BorderedInput bind:value={item.sigungu} fontSize="16px" /></div>
			<BorderedInput
					bind:value={item.address}
					fontSize="16px"
					width="600px"
				/>
		</FlexCol>
	</DetailRow>
	<DetailRow title="취소 및 환불규정">
		<Select
				lists={refundTypes}
				selected={item.refundType}
				fontSize="16px"
				height="30px"
			/>
	</DetailRow>
	
</DetailPanelLayout>

<style>
	.half {
		width: 30%;
		display: flex;
	}
	.title {
		width: 100%;
		background-color: #b9b9b9;
		color: white;
		padding: 20px;
	}
</style>

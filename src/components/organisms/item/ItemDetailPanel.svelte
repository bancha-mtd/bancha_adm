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
  	import APIs from "../../utils/APIs";
	export let itemId: string;
	import Image from "../../atoms/images/Image.svelte";
	import { onMount } from 'svelte';

	let tfile: Blob;
	let dfile: Blob;
	const tfileHandler = (e) => {
		tfile = e.target.files[0];
		item.detailImage = URL.createObjectURL(tfile);
	};
	const dfileHandler = (e) => {
		dfile = e.target.files[0];
		item.detailImage= URL.createObjectURL(dfile);
	};
	let categoryNames = [];
	let refundTypes = [];
	let bizNames = [];
	let managers = [];

	onMount(async () => {
    const response = await fetch('http://3.38.18.168/admin/product/add-product-form');
    const data = await response.json();
    categoryNames = Object.entries(data.categoryNames);
    refundTypes = Object.entries(data.refundTypes);
    bizNames = Object.entries(data.bizNames);
    managers = Object.entries(data.managers);
  });

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

	let discountedPercentage = 0;
	let item = {
		id: "",
		partnerId: -1,
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
		refundType: refundTypes[0],

		facilities: ""
	};

	const deleteItem = () => {
		return;
	};
	const addItem = () => {
		const combinedValue = `${item.peopleStandard} 기준 ${item.peopleMin}인 ~ ${item.peopleMax}인`;

		

		let newitem = {
			categoryIds: [
				"2"
			],
			product: {
				partnerId: 1064, // *파트너 ID 고정(있어야하는듯)
				title: item.title,
				subTitle: item.subtitle,
				basicUserInfo: "최소 1명, 최대 4명", // 위 컴바인 벨류 수정필요
				autoConfirm: true, // 뭔지 모름
				reservationDay: "1111110", // *숫자 7개 고정 월~일 되는거1 안되는거 0 처리하기
				facilities: item.facilities, 
				address: item.address,
				postNum: item.postcode,
				addr: item.sigungu,
				programContentText: "프로그램 요약",
				include: "포함",
				exclude: "불포함",
				recommendAge: "12세",
				productText: "상품 상세 설명", //인풋은 구현 api 수정후 연결
				useYn: true,
				remark: "string",
				useMinute: 120,
				checkList: "체크해주세요", // 공지사항 연결하면 될듯
				latitude: "0",
				longitude: "0",
				refundTypeId: 0,
				refundImageUrl: "string", // 파일이라 구현 x api 수정후 구현
				prePrice: 55000,
				afterPrice: 50000,
				maxAge: 15,
				minAge: 10,
				random_show: "n", // 뭐 넣어야할지 모르겠음
				managerId: 590,
				manualLabel: "", // 이것도 모르겠음
				programSummary: "요약", // ..?
				target: "키즈패밀리",
				isBanchaPlaning: true,
				isDiscounted: true,
				randomShow: "y" // ㅁㄴㅇㄹ
			},
			excludingDateList: [
				"2023-07-26"
			],
			saleList: [
				{
				options: [
					{
					time: "옵션1",
					price: 20000,
					stock: 10,
					seq: 1,
					additionalOptions: [
						{
						title: "옵션1-1",
						price: 5000,
						stock: 10
						},
						{
						title: "옵션1-2",
						price: 10000,
						stock: 10
						}
					]
					},
					{
					time: "옵션2",
					price: 25000,
					stock: 10,
					seq: 1,
					additionalOptions: [
						{
						title: "옵션2-1",
						price: 7000,
						stock: 10
						},
						{
						title: "옵션2-2",
						price: 12000,
						stock: 10
						},
					],
					},
				],
				},
			],
		};
		let frm = new FormData();
		frm.append(
			"req",
			new Blob([JSON.stringify(newitem)], { type: "application/json" })
		);
		frm.append("productDescriptionImg",dfile)
		frm.append("thumbnailImages", dfile)

		APIs.addItem(frm).then((res) => {
			if (res.status === 200) {
				alert("등록 완료");
			} else {
				alert("오류가 발생했습니다.");
			}
		});
		for (const pair of frm.entries()) {
  		//console.log(pair[0], pair[1]);
		}
		console.log(JSON.stringify(newitem));
		console.log(frm.get("productDescriptionImg"));
		console.log(frm.get("thumbnailImages"));
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
		onClick={addItem}
		>등록</GreyBackgroundButton
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
		<select bind:value={item.manager}>
		  <option value="">담당자 선택</option>
		  {#each managers as [id, name]}
			<option value={id}>{name}</option>
		  {/each}
		</select>
	  </DetailRow>
	  
	  <DetailRow title="파트너">
		<select bind:value={item.partner}>
		  <option value="">파트너 선택</option>
		  {#each Object.entries(bizNames) as [id, name]}
			<option value={id}>{name}</option>
		  {/each}
		</select>
	  </DetailRow>
	  
	<DetailRow title="시설 종류">
		<BorderedInput list="facilities" bind:value={item.facilities} />
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
	<DetailRow title="소요시">
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
	<DetailRow title="상세 이미지">
		<FlexCol
		><Image width="70%" height="350px" src={item.detailImage} />
		<input
			accept="image/*"
			type="file"
			bind:value={dfile}
			on:change={dfileHandler}
		/>
	</FlexCol>
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
		<select bind:value={item.refundType}>
		  <option value="">규정 선택</option>
		  {#each refundTypes as [id, text]}
			<option value={id}>{text}</option>
		  {/each}
		</select>
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

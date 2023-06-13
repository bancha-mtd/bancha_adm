<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import BoldText from "../../atoms/texts/BoldText.svelte";
	import DesignedDetailLayout from "../../layouts/DesignedDetailLayout.svelte";
	import GreyBgTitledRow from "../../molecules/detail/GreyBgTitledRow.svelte";
	import Text from "../../atoms/texts/Text.svelte";
	import Flex from "../../atoms/layouts/Flex.svelte";
	import SpaceBetweenCol from "../../atoms/layouts/SpaceBetweenCol.svelte";
	import SpaceBetween from "../../atoms/layouts/SpaceBetween.svelte";
	import Select from "../../molecules/search/Select.svelte";
	import BorderedInput from "../../atoms/inputs/BorderedInput.svelte";
	import LabeledBorderedInput from "../../molecules/detail/LabeledBorderedInput.svelte";
	import LinkedText from "../../atoms/links/LinkedText.svelte";
	import BorderedTextArea from "../../atoms/inputs/BorderedTextArea.svelte";
	import APIs from "../../utils/APIs";
	
	export let itemId: string;

	let partnerGrade = [
		{ id: 1, name: "우수", value: 1 },
		{ id: 2, name: "보통", value: 2 },
		{ id: 3, name: "관리 요망", value: 3 },
	];
	let bizBanks = [
		{ id: 1, name: "하나은행", value: 1 },
		{ value: 2, id: 2, name: "경남은행" },
		{ value: 3, id: 3, name: "광주은행" },
		{ value: 4, id: 4, name: "국민은행" },
		{ value: 5, id: 5, name: "기업은행" },
		{ value: 6, id: 6, name: "농협" },
		{ value: 7, id: 7, name: "대구은행" },
		{ value: 8, id: 8, name: "도이치뱅크" },
		{ value: 9, id: 9, name: "부산은행" },
		{ value: 10, id: 10, name: "산업은행" },
		{ value: 11, id: 11, name: "저축은행" },
		{ value: 12, id: 12, name: "새마을금고" },
		{ value: 13, id: 13, name: "수협은행" },
		{ value: 14, id: 14, name: "신협" },
		{ value: 15, id: 15, name: "신한은행" },
		{ value: 16, id: 16, name: "우리은행" },
		{ value: 17, id: 17, name: "우체국" },
		{ value: 18, id: 18, name: "전북은행" },
		{ value: 19, id: 19, name: "카카오뱅크" },
		{ value: 20, id: 20, name: "케이뱅크" },
		{ value: 21, id: 21, name: "제주은행" },
		{ value: 22, id: 22, name: "한국씨티은행" },
		{ value: 23, id: 23, name: "BOA" },
		{ value: 24, id: 24, name: "HSBC" },
		{ value: 25, id: 25, name: "JP모간" },
		{ value: 26, id: 26, name: "SC제일은행" },
		{ value: 27, id: 27, name: "하나증권" },
		{ value: 28, id: 28, name: "교보증권" },
		{ value: 29, id: 29, name: "대신증권" },
		{ value: 30, id: 30, name: "미래에셋증권" },
		{ value: 31, id: 31, name: "DB금융투자" },
		{ value: 32, id: 32, name: "유안타증권" },
		{ value: 33, id: 33, name: "메리츠증권" },
		{ value: 34, id: 34, name: "부국증권" },
		{ value: 35, id: 35, name: "삼성증권" },
		{ value: 36, id: 36, name: "신영증권" },
		{ value: 37, id: 37, name: "신한투자증권" },
		{ value: 38, id: 38, name: "NH투자증권" },
		{ value: 39, id: 39, name: "유진증권" },
		{ value: 40, id: 40, name: "키움증권" },
		{ value: 41, id: 41, name: "하이투자증권" },
		{ value: 42, id: 42, name: "한국투자" },
		{ value: 43, id: 43, name: "한화투자증권" },
		{ value: 44, id: 44, name: "KB증권" },
		{ value: 45, id: 45, name: "이베스트투자증권" },
		{ value: 46, id: 46, name: "현대차증권" },
		{ value: 47, id: 47, name: "케이프증권" },
		{ value: 48, id: 48, name: "SK증권" },
		{ value: 49, id: 49, name: "산림조합" },
		{ value: 50, id: 50, name: "중국공상은행" },
		{ value: 51, id: 51, name: "중국은행" },
		{ value: 52, id: 52, name: "중국건설은행" },
		{ value: 53, id: 53, name: "BNP파리바은행" },
		{ value: 54, id: 54, name: "한국포스증권" },
		{ value: 55, id: 55, name: "다올투자증권" },
		{ value: 56, id: 56, name: "BNK투자증권" },
		{ value: 57, id: 57, name: "카카오페이증권" },
		{ value: 58, id: 58, name: "IBK투자증권" },
		{ value: 59, id: 59, name: "토스증권" },
		{ value: 60, id: 60, name: "토스뱅크" },
	];
	let item = {
		id: itemId,
		email: "",
		password: "",
		grade: partnerGrade[0],
		ceo: "",
		manager: "",
		nickname: "",
		postcode: "",
		sigungu: "",
		address: "",
		addressDetail: "",
		fee: "0",
		phone: "",
		phoneSub: "",
		phoneLocal: "",
		bizNumber: "",
		bizAccountBank: bizBanks[0],
		bizAccount: "",
		createtime: "",
		reviews: 0,
		sales: 0,
		itemCnt: 0,
		items: [],
		partnerInfoTitle: "",
		partnerInfo: "",
		profileImg: "",
		thumb1: [],
	};
	const add = () => {
		let itemformat = {
			partnerId : item.id,
			password : item.password,
			bizname : item.nickname,
			ceoName : item.ceo,
			managerId : item.manager,
			certification : true,
			bizNumber : item.bizNumber,
			bankNumber : item.bizAccountBank,
			subTitle : item.partnerInfoTitle,
			description : item.partnerInfo,
			cellphone : item.phone,
			address : item.address,
			pees : item.fee,
			useYn : true,
			remark : "",
			state : 0,

		};

		let frm = new FormData();
		frm.append(
			"partner",
			new Blob([JSON.stringify(itemformat)], { type: "application/json" })
		);
		frm.append("thumbnail", "test");
		frm.append("image", "test");
		APIs.editEvent(frm).then((res) => {
			if (res.status === 200) {
				alert("수정 완료");
			} else {
				alert("오류가 발생했습니다.");
			}
			const formDataObject = {};
			for (const [key, value] of frm) {
			formDataObject[key] = value;
			}

			console.log(JSON.stringify(formDataObject));
		return;
	});
	}
	const modifyItem = () => {
		console.log(item);
		return;
	};

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

<SpaceBetween marginBottom="20px">
	<BoldText fontSize="18px">파트너 정보</BoldText>
	<GreyBackgroundButton
		onClick={modifyItem}
		width="60px"
		height="30px"
		fontSize="16px">{itemId === "new" ? "등록" : "수정"}</GreyBackgroundButton
	>
</SpaceBetween>
<DesignedDetailLayout>
	<Flex>
		<GreyBgTitledRow title="회원번호">
			<Text fontSize="16px">{itemId}</Text>
		</GreyBgTitledRow>
		<GreyBgTitledRow title="이메일">
			<BorderedInput
				type="email"
				bind:value={item.email}
				fontSize="16px"
				width="250px"
			/>
		</GreyBgTitledRow>
		<GreyBgTitledRow title="비밀번호">
			<BorderedInput
				type="password"
				bind:value={item.password}
				fontSize="16px"
				width="250px"
			/>
		</GreyBgTitledRow>
	</Flex>
	<Flex>
		<GreyBgTitledRow title="등급">
			<Select
				lists={partnerGrade}
				bind:selected={item.grade}
				height="30px"
				fontSize="16px"
			/>
		</GreyBgTitledRow>
		<GreyBgTitledRow title="대표자">
			<BorderedInput bind:value={item.ceo} fontSize="16px" />
		</GreyBgTitledRow>
		<GreyBgTitledRow title="담당자">
			<BorderedInput bind:value={item.manager} fontSize="16px" />
		</GreyBgTitledRow>
	</Flex>
	<Flex>
		<GreyBgTitledRow title="닉네임">
			<BorderedInput bind:value={item.nickname} fontSize="16px" />
		</GreyBgTitledRow>
		<GreyBgTitledRow title="수수료">
			<LabeledBorderedInput
				type="number"
				pre=""
				post="%"
				bind:value={item.fee}
			/>
		</GreyBgTitledRow>
		<GreyBgTitledRow title="가입일">
			<Text fontSize="16px">{item.createtime}</Text>
		</GreyBgTitledRow>
	</Flex>
	<Flex>
		<GreyBgTitledRow title="연락처 1">
			<BorderedInput bind:value={item.phone} fontSize="16px" width="200px" />
		</GreyBgTitledRow>
		<GreyBgTitledRow title="연락처 2">
			<BorderedInput bind:value={item.phoneSub} fontSize="16px" width="200px" />
		</GreyBgTitledRow>
		<GreyBgTitledRow title="유선 전화">
			<BorderedInput
				bind:value={item.phoneLocal}
				fontSize="16px"
				width="200px"
			/>
		</GreyBgTitledRow>
	</Flex>
	<Flex>
		<GreyBgTitledRow title="사업자등록번호">
			<BorderedInput
				bind:value={item.bizNumber}
				fontSize="16px"
				width="200px"
			/>
		</GreyBgTitledRow>
		<GreyBgTitledRow title="계좌 은행">
			<Select
				lists={bizBanks}
				bind:selected={item.bizAccountBank}
				height="30px"
				fontSize="16px"
			/>
		</GreyBgTitledRow>
		<GreyBgTitledRow title="계좌 번호">
			<BorderedInput
				bind:value={item.bizAccount}
				fontSize="16px"
				width="200px"
			/>
		</GreyBgTitledRow>
	</Flex>
	<Flex>
		<GreyBgTitledRow title="우편번호">
			<BorderedInput
				bind:value={item.postcode}
				click={findAddr}
				fontSize="16px"
			/>
		</GreyBgTitledRow>
		<GreyBgTitledRow title="시군구">
			<BorderedInput bind:value={item.sigungu} fontSize="16px" />
		</GreyBgTitledRow>
		<GreyBgTitledRow title="주소">
			<SpaceBetweenCol gap="10px">
				<BorderedInput
					bind:value={item.address}
					fontSize="16px"
					width="300px"
				/>
				<BorderedInput
					bind:value={item.addressDetail}
					fontSize="16px"
					width="300px"
				/>
			</SpaceBetweenCol>
		</GreyBgTitledRow>
	</Flex>
</DesignedDetailLayout>

<SpaceBetween marginBottom="20px">
	<BoldText fontSize="18px">등록 상품</BoldText>
</SpaceBetween>
<DesignedDetailLayout>
	<Flex>
		<GreyBgTitledRow title="상품수">
			<Text fontSize="16px">{item.itemCnt}</Text>
		</GreyBgTitledRow>
		<GreyBgTitledRow title="후기수">
			<Text fontSize="16px">{item.reviews}</Text>
		</GreyBgTitledRow>
		<GreyBgTitledRow title="판매수">
			<Text fontSize="16px">{item.sales}</Text>
		</GreyBgTitledRow>
	</Flex>
	<GreyBgTitledRow
		title="상품명"
		height={item.itemCnt === 0 ? "100px" : item.itemCnt * 50 + "px"}
	>
		<SpaceBetweenCol>
			{#if item.itemCnt === 0}
				<Text fontSize="16px">판매중인 상품이 없어요...</Text>
			{:else}
				{#each item.items as it}
					<LinkedText to="item/{it.id}">{it.title}</LinkedText>
				{/each}
			{/if}
		</SpaceBetweenCol>
	</GreyBgTitledRow>
</DesignedDetailLayout>

<SpaceBetween marginBottom="20px">
	<BoldText fontSize="18px">파트너 소개</BoldText>
</SpaceBetween>
<DesignedDetailLayout>
	<GreyBgTitledRow title="제목" width="100%">
		<BorderedInput
			bind:value={item.partnerInfoTitle}
			fontSize="16px"
			width="50%"
		/>
	</GreyBgTitledRow>
	<GreyBgTitledRow title="파트너 소개" width="100%" height="460px">
		<BorderedTextArea
			bind:value={item.partnerInfo}
			fontSize="16px"
			width="80%"
			height="400px"
		/>
	</GreyBgTitledRow>
</DesignedDetailLayout>

<SpaceBetween marginBottom="20px">
	<BoldText fontSize="18px">프로필 이미지</BoldText>
</SpaceBetween>

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
  import { onMount } from "svelte";
  import BorderedList from "../../atoms/lists/BorderedList.svelte";
  import RandomItemPanel from "../category/RandomItemPanel.svelte";
  import Flex from "../../atoms/layouts/Flex.svelte";
  import { construct_svelte_component } from "svelte/internal";

  let dfile: Blob;
  let tfile1: Blob;
  let tfile2: Blob;
  let tfile3: Blob;
  let tfile4: Blob;
  let tfile5: Blob;
  const dfileHandler = (e) => {
    dfile = e.target.files[0];
    item.detailImage = URL.createObjectURL(dfile);
  };

  const tfileHandler1 = (e) => {
    tfile1 = e.target.files[0];
    item.detailImage = URL.createObjectURL(tfile1);
  };
  const tfileHandler2 = (e) => {
    tfile2 = e.target.files[0];
    item.detailImage = URL.createObjectURL(tfile2);
  };
  const tfileHandler3 = (e) => {
    tfile3 = e.target.files[0];
    item.detailImage = URL.createObjectURL(tfile3);
  };
  const tfileHandler4 = (e) => {
    tfile4 = e.target.files[0];
    item.detailImage = URL.createObjectURL(tfile4);
  };
  const tfileHandler5 = (e) => {
    tfile5 = e.target.files[0];
    item.detailImage = URL.createObjectURL(tfile5);
  };

  let categoryNames = [];
  let refundTypes = [];
  let bizNames = [];
  let managers = [];

  onMount(async () => {
    const response = await fetch(
      "http://3.38.18.168/admin/product/add-product-form"
    );
    const data = await response.json();
    categoryNames = Object.entries(data.categoryNames);
    refundTypes = Object.entries(data.refundTypes);
    bizNames = Object.entries(data.bizNames); // 파트너
    managers = Object.entries(data.managers); // 담당자
  });

  let partners: string[];
  let categories: SelectType[] = [{ id: -1, name: "", value: -1 }];
  let targets: SelectType[] = [
    { id: 1, name: "키즈", value: "kids" },
    { id: 2, name: "키즈패밀리", value: "kidsfamily" },
    { id: 3, name: "부모", value: "parent" },
  ];
  let types: SelectType[] = [
    { id: 1, name: "반차 기획", value: 1 },
    { id: 2, name: "판매자 기획", value: 2 },
  ];
  let randoms: SelectType[] = [
    { id: 1, name: "노출", value: 1 },
    { id: 2, name: "숨김", value: 2 },
  ];
  let autoConfirms: SelectType[] = [
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

    facilities: "",
    lat: "",
    long: "",
    summary: "",
    random: randoms[0],
    excludingDate: "",
  };

  let optiontitle1 = "";
  let optiontitle2 = "";
  let optiontitle3 = "";
  let additionaltitle = "";

  const maxOptions = 10;

  let options = [{ value: "", details: [""] }];
  let options2 = [{ value: "", details: [""] }];
  let options3 = [{ value: "", details: [""] }];
  let options4 = [{ value: "", details: [""] }]; // 추가 옵션

  function addDetail(option, index) {
    if (option[index].details.length < maxOptions) {
      option[index].details = [...option[index].details, ""];
    }
    options = [...options];
    options2 = [...options2];
    options3 = [...options3];
    options4 = [...options4];
  }

  function removeDetail(option, optionIndex, detailIndex) {
    if (option[optionIndex].details.length > 1) {
      option[optionIndex].details = option[optionIndex].details.filter(
        (_, i) => i !== detailIndex
      );
    }
    options = [...options];
    options2 = [...options2];
    options3 = [...options3];
    options4 = [...options4];
  }

  let tableData = [];
  let tableData2 = [];
  let showTable = false;
  let showTable2 = false;

  function generateTable() {
    const option1Details = options[0].details.filter(
      (detail) => detail.trim() !== ""
    );
    const option2Details = options2[0].details.filter(
      (detail) => detail.trim() !== ""
    );
    const option3Details = options3[0].details.filter(
      (detail) => detail.trim() !== ""
    );

    tableData = [];
    for (let i = 0; i < option1Details.length; i++) {
      for (let j = 0; j < option2Details.length; j++) {
        for (let k = 0; k < option3Details.length; k++) {
          const option1Detail = option1Details[i];
          const option2Detail = option2Details[j];
          const option3Detail = option3Details[k];

          tableData.push({
            optionValue: `${option1Detail} > ${option2Detail} > ${option3Detail}`,
            price: "",
            stock: "",
          });
        }
      }
    }
    showTable = true;
  }

  function generateTable2() {
    const option4Details = options4[0].details.filter(
      (detail) => detail.trim() !== ""
    );

    tableData2 = [];
    for (let i = 0; i < option4Details.length; i++) {
      const option4Detail = option4Details[i];

      tableData2.push({
        title: `${option4Detail}`,
        price: "",
        stock: "",
      });
    }
    showTable2 = true;
  }

  function handlePriceInput(event, itemIndex) {
    tableData[itemIndex].price = event.target.value;
  }

  function handleStockInput(event, itemIndex) {
    tableData[itemIndex].stock = event.target.value;
  }
  let lastSegment = "";

  onMount(() => {
    const url = window.location.href;
    const segments = url.split("/");
    lastSegment = segments[segments.length - 1];
    if (itemId !== "new") getItem();
    itemId = lastSegment;
  });

  const getItem = () => {
    APIs.getItemDetail(itemId).then((res) => {
      const responseData = res.data;
      const allowedKeys = Object.keys(item);
      for (const key in responseData) {
        if (allowedKeys.includes(key)) {
          item[key] = responseData[key];
        }
      }
      console.log(responseData);
      console.log(item);
    });
  };

  const deleteItem = () => {
    return;
  };
  const addItem = () => {
    const combinedValue = `${item.peopleStandard} 기준 ${item.peopleMin}인 ~ ${item.peopleMax}인`;

    let newitem = {
      categoryIds: ["2"],
      product: {
        partnerId: 1046, // 테스트용이라 고정
        title: item.title,
        subTitle: item.subtitle,
        basicUserInfo: combinedValue,
        autoConfirm: item.autoConfirm.value,
        reservationDay: "1111110", // *숫자 7개 고정 월~일 되는거1 안되는거 0 처리하기
        facilities: item.facilities,
        address: item.address,
        postNum: item.postcode,
        addr: item.sigungu,
        programContentText: item.itemPoint,
        include: item.includes,
        exclude: item.excludes,
        recommendAge: item.ageStandard,
        productText: "", // 보류
        useYn: true, // 라디오 버튼 활성화 비활성화
        remark: "string", // 보류
        useMinute: item.estimatedTime,
        checkList: item.notice, // 공지사항 붙여둠
        latitude: item.lat,
        longitude: item.long,
        refundTypeId: 0, // 아래거 할때 같이할게
        refundImageUrl: "string", // 파일이라 구현 x api 수정후 구현
        prePrice: item.price,
        afterPrice: item.discountedPrice,
        maxAge: item.ageMax,
        minAge: item.ageMin,
        managerId: 590, // 테스트 끝나면 매니저 id 넣기
        manualLabel: item.label,
        programSummary: "", // 보류
        target: item.target.name,
        isBanchaPlaning: true,
        isDiscounted: true,
        randomShow: item.random.name, // 노출 숨김 넣어둠
      },
      excludingDateList: [
        "2023-07-26", // item.excludingDate 날짜 방식 확정후 넣음
      ],
      saleList: {
        optionTitleKeys: [optiontitle1, optiontitle2, optiontitle3],
        options: tableData,
      },
      additionalOptionList: tableData2,
    };
    let frm = new FormData();
    frm.append(
      "req",
      new Blob([JSON.stringify(newitem)], { type: "application/json" })
    );
    frm.append("productDescriptionImg", dfile); // 상품상세 이미지 프론트 추가해야함
    frm.append("thumbnailImages", tfile1);
    frm.append("thumbnailImages", tfile2);
    frm.append("thumbnailImages", tfile3);
    frm.append("thumbnailImages", tfile4);
    frm.append("thumbnailImages", tfile5);

    APIs.addItem(frm).then((res) => {
      if (res.status === 200) {
        alert("등록 완료");
      } else {
        alert("오류가 발생했습니다.");
      }
    });
    console.log(JSON.stringify(newitem));
    for (const pair of frm.entries()) {
      console.log(pair);
    }
    return;
  };
  const modifyItem = () => {
    let frm = new FormData();
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
    onClick={addItem}>등록</GreyBackgroundButton
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
  <DetailRow title="유형">
    <Radio
      name="random"
      bind:value={item.random}
      height="30px"
      fontSize="16px"
      lists={randoms}
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
      <Image width="70%" height="350px" src={item.thumbnail01} />
      <input
        type="file"
        accept="image/*"
        bind:value={tfile1}
        on:change={tfileHandler1}
      />
      <Image width="70%" height="350px" src={item.thumbnail02} /><input
        type="file"
        accept="image/*"
        bind:value={tfile2}
        on:change={tfileHandler2}
      />
      <Image width="70%" height="350px" src={item.thumbnail03} />
      <input
        type="file"
        accept="image/*"
        bind:value={tfile3}
        on:change={tfileHandler3}
      />
      <Image width="70%" height="350px" src={item.thumbnail04} />
      <input
        type="file"
        accept="image/*"
        bind:value={tfile4}
        on:change={tfileHandler4}
      />
      <Image width="70%" height="350px" src={item.thumbnail05} />
      <input
        type="file"
        accept="image/*"
        bind:value={tfile5}
        on:change={tfileHandler5}
      />
    </FlexCol>
  </DetailRow>

  <div class="title">
    <BoldText fontSize="20px">캘린더(옵션 및 재고)</BoldText>
  </div>
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
    <BorderedTextArea bind:value={item.excludingDate} height="30px" />
    <div />
  </DetailRow>

  <DetailRow title="옵션1">
    <Flex gap="20px">
      <BorderedInput bind:value={optiontitle1} fontSize="16px" />
      <FlexCol gap="10px">
        {#each options as option, optionIndex}
          <div>
            {#each option.details as detail, detailIndex}
              <div>
                <BorderedInput
                  bind:value={detail}
                  placeholder="상세 정보"
                  width="500px"
                />

                {#if detailIndex === option.details.length - 1}
                  {#if option.details.length < maxOptions}
                    <GreyBackgroundButton
                      width="50px"
                      height="30px"
                      onClick={() => addDetail(options, optionIndex)}
                      >추가</GreyBackgroundButton
                    >
                  {/if}
                {:else}
                  <GreyBackgroundButton
                    width="50px"
                    height="30px"
                    onClick={() =>
                      removeDetail(options, optionIndex, detailIndex)}
                    >삭제</GreyBackgroundButton
                  >
                {/if}
              </div>
            {/each}
          </div>
        {/each}</FlexCol
      ></Flex
    >
  </DetailRow>

  <DetailRow title="옵션2">
    <Flex gap="20px">
      <BorderedInput bind:value={optiontitle2} fontSize="16px" />

      <FlexCol gap="10px">
        {#each options2 as option, optionIndex}
          <div>
            {#each option.details as detail, detailIndex}
              <div>
                <BorderedInput
                  bind:value={detail}
                  placeholder="상세 정보"
                  width="500px"
                />

                {#if detailIndex === option.details.length - 1}
                  {#if option.details.length < maxOptions}
                    <GreyBackgroundButton
                      width="50px"
                      height="30px"
                      onClick={() => addDetail(options2, optionIndex)}
                      >추가</GreyBackgroundButton
                    >
                  {/if}
                {:else}
                  <GreyBackgroundButton
                    width="50px"
                    height="30px"
                    onClick={() =>
                      removeDetail(options2, optionIndex, detailIndex)}
                    >삭제</GreyBackgroundButton
                  >
                {/if}
              </div>
            {/each}
          </div>
        {/each}</FlexCol
      ></Flex
    >
  </DetailRow>

  <DetailRow title="옵션3">
    <Flex gap="20px">
      <BorderedInput bind:value={optiontitle3} fontSize="16px" />

      <FlexCol gap="10px">
        {#each options3 as option, optionIndex}
          <div>
            {#each option.details as detail, detailIndex}
              <div>
                <BorderedInput
                  bind:value={detail}
                  placeholder="상세 정보"
                  width="500px"
                />

                {#if detailIndex === option.details.length - 1}
                  {#if option.details.length < maxOptions}
                    <GreyBackgroundButton
                      width="50px"
                      height="30px"
                      onClick={() => addDetail(options3, optionIndex)}
                      >추가</GreyBackgroundButton
                    >
                  {/if}
                {:else}
                  <GreyBackgroundButton
                    width="50px"
                    height="30px"
                    onClick={() =>
                      removeDetail(options3, optionIndex, detailIndex)}
                    >삭제</GreyBackgroundButton
                  >
                {/if}
              </div>
            {/each}
          </div>
        {/each}</FlexCol
      ></Flex
    >
  </DetailRow>
  <div class="centered">
    <GreyBackgroundButton
      fontSize="12px"
      height="30px"
      width="150px"
      onClick={generateTable}>테이블 생성</GreyBackgroundButton
    >
  </div>
  <br />
  {#if showTable && tableData.length > 0}
    <table>
      <thead>
        <tr>
          <th>옵션</th>
          <th>가격</th>
          <th>재고</th>
        </tr>
      </thead>
      <tbody>
        {#each tableData as item, itemIndex}
          <tr>
            <td class="optionValue">{item.optionValue}</td>
            <td>
              <input
                class="stock"
                type="text"
                value={item.price || ""}
                on:input={(event) => handlePriceInput(event, itemIndex)}
              />
            </td>
            <td>
              <input
                class="stock"
                type="text"
                value={item.stock || ""}
                on:input={(event) => handleStockInput(event, itemIndex)}
              />
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}

  <DetailRow title="추가 옵션">
    <Flex gap="20px">
      <BorderedInput bind:value={additionaltitle} fontSize="16px" />

      <FlexCol gap="10px">
        {#each options4 as option, optionIndex}
          <div>
            {#each option.details as detail, detailIndex}
              <div>
                <BorderedInput
                  bind:value={detail}
                  placeholder="상세 정보"
                  width="500px"
                />

                {#if detailIndex === option.details.length - 1}
                  {#if option.details.length < maxOptions}
                    <GreyBackgroundButton
                      width="50px"
                      height="30px"
                      onClick={() => addDetail(options4, optionIndex)}
                      >추가</GreyBackgroundButton
                    >
                  {/if}
                {:else}
                  <GreyBackgroundButton
                    width="50px"
                    height="30px"
                    onClick={() =>
                      removeDetail(options4, optionIndex, detailIndex)}
                    >삭제</GreyBackgroundButton
                  >
                {/if}
              </div>
            {/each}
          </div>
        {/each}
      </FlexCol></Flex
    >
  </DetailRow>

  <div class="centered">
    <GreyBackgroundButton
      fontSize="12px"
      height="30px"
      width="150px"
      onClick={generateTable2}>테이블 생성</GreyBackgroundButton
    >
  </div>
  <br />
  {#if showTable2 && tableData2.length > 0}
    <table>
      <thead>
        <tr>
          <th>옵션</th>
          <th>가격</th>
          <th>재고</th>
        </tr>
      </thead>
      <tbody>
        {#each tableData2 as item, itemIndex}
          <tr>
            <td class="optionValue">{item.title}</td>
            <td>
              <input
                class="stock"
                type="text"
                value={item.price || ""}
                on:input={(event) => handlePriceInput(event, itemIndex)}
              />
            </td>
            <td>
              <input
                class="stock"
                type="text"
                value={item.stock || ""}
                on:input={(event) => handleStockInput(event, itemIndex)}
              />
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}

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
  <div class="title"><BoldText fontSize="20px">기타정보</BoldText></div>
  <DetailRow title="위치">
    <FlexCol gap="10px">
      <div>
        <BorderedInput
          bind:value={item.postcode}
          click={findAddr}
          fontSize="16px"
        />
        <BorderedInput bind:value={item.sigungu} fontSize="16px" />
      </div>
      <BorderedInput bind:value={item.address} fontSize="16px" width="600px" />
    </FlexCol>
  </DetailRow>
  <DetailRow title="위도/경도">
    <FlexCol gap="10px">
      <div>
        <BorderedInput bind:value={item.lat} fontSize="16px" />
        <BorderedInput bind:value={item.long} fontSize="16px" />
      </div>
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

  table {
    border-collapse: collapse;
  }
  .optionValue {
    background-color: #cecece;
    border-radius: 10px;
    padding: 10px;
  }
  .stock {
    border: 1px solid #cecece;
    font-size: 16px;
    padding: 10px;
  }
  .centered {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  }
</style>

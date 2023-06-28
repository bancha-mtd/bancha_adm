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
    item.thumbnail01 = URL.createObjectURL(tfile1);
  };
  const tfileHandler2 = (e) => {
    tfile2 = e.target.files[0];
    item.thumbnail02 = URL.createObjectURL(tfile2);
  };
  const tfileHandler3 = (e) => {
    tfile3 = e.target.files[0];
    item.thumbnail03 = URL.createObjectURL(tfile3);
  };
  const tfileHandler4 = (e) => {
    tfile4 = e.target.files[0];
    item.thumbnail04 = URL.createObjectURL(tfile4);
  };
  const tfileHandler5 = (e) => {
    tfile5 = e.target.files[0];
    item.thumbnail05 = URL.createObjectURL(tfile5);
  };

  let categoryNames = [];
  let refundTypes = [];
  let bizNames = [];
  let bizpartner: SelectType[] = [];
  let managers = [];
  let categories: SelectType[] = [];

  onMount(async () => {
    const data = await APIs.getItemForm();
    categoryNames = Object.entries(data.data.categoryNames);
    refundTypes = Object.entries(data.data.refundTypes);
    bizNames = Object.entries(data.data.bizNames); // 파트너
    managers = Object.entries(data.data.managers); // 담당자
    for (const [key, value] of Object.entries(bizNames)) {
      bizpartner.push({ id: value[0], name: value[1], value: value[0] });
    }

    for (const [id, name] of categoryNames) {
      const categoryId = parseInt(id, 10);
      categories.push({ id: categoryId, name: name, value: categoryId });
    }
  });

  let partners: string[];

  let targets: SelectType[] = [
    { id: 1, name: "키즈", value: "kids" },
    { id: 2, name: "키즈패밀리", value: "kidsfamily" },
    { id: 3, name: "부모", value: "parent" },
  ];
  let types: SelectType[] = [
    { id: 1, name: "반차 기획", value: 1 },
    { id: 2, name: "판매자 기획", value: 2 },
  ];
  let yn: SelectType[] = [
    { id: 1, name: "공개", value: true },
    { id: 2, name: "비공개 ", value: false },
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
    id: -1,
    useYn: yn[0],
    partnerId: -1,
    managerId: -1,
    manager: "",
    partner: "",
    category1: "",
    category2: "",
    category3: "",
    target: targets[0],
    type: types[0],
    title: "",
    subtitle: "",
    hashtags: "",
    peopleStandard: "",
    peopleMin: "",
    peopleMax: "",
    programSummary: "",
    ageStandard: "",
    ageMin: "",
    ageMax: "",
    useMinute: "",
    autoConfirm: autoConfirms[0],
    activeDay: [false, false, false, false, false, false, false],
    itemPoint: "",
    include: "",
    exclude: "",
    price: "",
    discountedPrice: "",
    label: "",
    checkList: "",
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

    productText: "",
    remark: "",
    refundImageUrl: "",
    isBanchaPlaning: true,
    isDiscounted: true,
    excludingDateList: [
      "2023-07-26", // item.excludingDate 날짜 방식 확정후 넣음
    ],
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

  function handleManageSelection(event) {
    const selectedId = event.target.value;
    const selectedValue = managers[selectedId];
    item.managerId = parseInt(selectedValue[0], 10);
  }

  function handlePartnerSelection(event) {
    const selectedId = event.target.value;
    const selectedValue = bizNames[selectedId];
    item.partnerId = parseInt(selectedValue[0], 10);
  }
  let c1, c2, c3: "";

  function handleCartegorySelection1(event) {
    const selectedId = event.target.value;
    const selectedValue = categories[selectedId];
    c1 = selectedValue.value;
  }
  function handleCartegorySelection2(event) {
    const selectedId = event.target.value;
    const selectedValue = categories[selectedId];
    c2 = selectedValue.value;
  }
  function handleCartegorySelection3(event) {
    const selectedId = event.target.value;
    const selectedValue = categories[selectedId];
    c3 = selectedValue.value;
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

    if (option1Details.length > 0) {
      if (option2Details.length > 0 && option3Details.length > 0) {
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
      } else if (option2Details.length > 0) {
        for (let i = 0; i < option1Details.length; i++) {
          for (let j = 0; j < option2Details.length; j++) {
            const option1Detail = option1Details[i];
            const option2Detail = option2Details[j];

            tableData.push({
              optionValue: `${option1Detail} > ${option2Detail}`,
              price: "",
              stock: "",
            });
          }
        }
      } else {
        for (let i = 0; i < option1Details.length; i++) {
          const option1Detail = option1Details[i];

          tableData.push({
            optionValue: option1Detail,
            price: "",
            stock: "",
          });
        }
      }

      showTable = true;
    } else {
      showTable = false;
    }
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
  function handlePriceInput2(event, itemIndex) {
    tableData2[itemIndex].price = event.target.value;
  }

  function handleStockInput2(event, itemIndex) {
    tableData2[itemIndex].stock = event.target.value;
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
      const product = responseData.product;
      for (const key in product) {
        if (allowedKeys.includes(key)) {
          item[key] = product[key];
        }
      }
      console.log(product);
      item.checkList = product.programContentText;
      item.detailImage = product.productImageUrl;
      item.subtitle = product.subTitle;
      item.price = product.prePrice;
      item.discountedPrice = product.afterPrice;
    });
  };

  const deleteItem = () => {
    return;
  };
  const addItem = () => {
    const combinedValue = `${item.peopleStandard} 기준 ${item.peopleMin}인 ~ ${item.peopleMax}인`;
    let activeDayString = item.activeDay
      .map((day) => (day ? "1" : "0"))
      .join("");

    let newitem = {
      categoryIds: [c1, c2, c3],
      product: {
        partnerId: item.partnerId || "",
        title: item.title || "",
        subTitle: item.subtitle || "",
        //basicUserInfo: combinedValue || "",
        autoConfirm: item.autoConfirm.value || "",
        reservationDay: activeDayString || "",
        facilities: item.facilities || "",
        address: item.address || "",
        postNum: item.postcode || "",
        addr: item.sigungu || "",
        programContentText: item.itemPoint || "",
        include: item.include || "",
        exclude: item.exclude || "",
        recommendAge: item.ageStandard || "",
        productText: "", // 보류
        useYn: item.useYn.value, // 라디오 버튼 활성화 비활성화
        remark: "string", // 일단 냅둠
        useMinute: item.useMinute || "",
        checkList: item.checkList || "", // 공지사항 붙여둠
        latitude: item.lat || "",
        longitude: item.long || "",
        refundTypeId: item.refundType || "",
        refundImageUrl: "string", // 미구현api 일단 냅둠
        prePrice: item.price || "",
        afterPrice: item.discountedPrice || "",
        maxAge: item.ageMax || "",
        minAge: item.ageMin || "",
        managerId: item.managerId || "", // DB수정후 등록할 예정
        manualLabel: item.label || "",
        programSummary: "", // 보류
        target: item.target.name || "",
        isBanchaPlaning: true,
        isDiscounted: true,
        randomShow: item.random.name || "", // 노출 숨김 넣어둠
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
    //console.log(JSON.stringify(newitem));

    return;
  };
  const modifyItem = () => {
    const combinedValue = `${item.peopleStandard} 기준 ${item.peopleMin}인 ~ ${item.peopleMax}인`;
    let activeDayString = item.activeDay
      .map((day) => (day ? "1" : "0"))
      .join("");

    let newitem = {
      categoryIds: [c1, c2, c3],
      product: {
        id: itemId,
        partnerId: item.partnerId || "",
        title: item.title || "",
        subTitle: item.subtitle || "",
        //basicUserInfo: combinedValue || "",
        autoConfirm: item.autoConfirm.value || "",
        reservationDay: activeDayString || "",
        facilities: item.facilities || "",
        address: item.address || "",
        postNum: item.postcode || "",
        addr: item.sigungu || "",
        programContentText: item.itemPoint || "",
        include: item.include || "",
        exclude: item.exclude || "",
        recommendAge: item.ageStandard || "",
        productText: "", // 보류
        useYn: item.useYn.value,
        remark: "string", // 일단 냅둠
        useMinute: item.useMinute || "",
        checkList: item.checkList || "", // 공지사항 붙여둠
        latitude: item.lat || "",
        longitude: item.long || "",
        refundTypeId: item.refundType || "",
        refundImageUrl: "string", // 미구현api 일단 냅둠
        prePrice: item.price || "",
        afterPrice: item.discountedPrice || "",
        maxAge: item.ageMax || "",
        minAge: item.ageMin || "",
        managerId: item.managerId || "",
        manualLabel: item.label || "",
        programSummary: "", // 보류
        target: item.target.name || "",
        isBanchaPlaning: true,
        isDiscounted: true,
        randomShow: item.random.name || "", // 노출 숨김 넣어둠
      },
      excludingDateList: [
        "2023-07-26", // 방식 확정후 넣어야함
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

    frm.append("productDescriptionImg", dfile);
    frm.append("thumbnailImages", tfile1);
    frm.append("thumbnailImages", tfile2);
    frm.append("thumbnailImages", tfile3);
    frm.append("thumbnailImages", tfile4);
    frm.append("thumbnailImages", tfile5);

    APIs.modifyItem(frm).then((res) => {
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
  const preview = () => {
    return;
  };
  $: discountedPercentage = Math.round(
    (100 * (Number(item.price) - Number(item.discountedPrice))) /
      Number(item.price)
  );

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
  <DetailRow title="노출 여부">
    <Radio
      name="type"
      bind:value={item.useYn}
      height="30px"
      fontSize="16px"
      lists={yn}
    />
  </DetailRow>
  <DetailRow title="담당자">
    <select bind:value={item.manager} on:change={handleManageSelection}>
      <option value="">담당자 선택</option>
      {#each Object.entries(managers) as [id, name]}
        <option value={id}>{name}</option>
      {/each}
    </select>
  </DetailRow>

  <DetailRow title="파트너">
    <select bind:value={item.partner} on:change={handlePartnerSelection}>
      <option value="">파트너 선택</option>
      {#each Object.entries(bizNames) as [id, name]}
        <option value={id}>{name}</option>
      {/each}
    </select>
  </DetailRow>

  <DetailRow title="카테고리">
    <SpaceAround gap="30px">
      <select bind:value={item.category1} on:change={handleCartegorySelection1}>
        <option value="">카테고리1 선택</option>
        {#each Object.entries(categoryNames) as [id, name]}
          <option value={id}>{name}</option>
        {/each}
      </select>
      <select bind:value={item.category2} on:change={handleCartegorySelection2}>
        <option value="">카테고리2 선택</option>
        {#each Object.entries(categoryNames) as [id, name]}
          <option value={id}>{name}</option>
        {/each}
      </select>
      <select bind:value={item.category3} on:change={handleCartegorySelection3}>
        <option value="">카테고리3 선택</option>
        {#each Object.entries(categoryNames) as [id, name]}
          <option value={id}>{name}</option>
        {/each}
      </select>
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
  <DetailRow title="랜덤 노출여부">
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
  <DetailRow title="해쉬 태그">
    <BorderedInput
      alignCenter={false}
      width="80%"
      list="facilities"
      bind:value={item.facilities}
    />
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
  <DetailRow title="자동확정여부">
    <Radio
      name="autoConfirm"
      bind:value={item.autoConfirm}
      height="30px"
      fontSize="16px"
      lists={autoConfirms}
    />
  </DetailRow>

  <DetailRow title="소요시간">
    <LabeledBorderedInput pre="" post="분" bind:value={item.useMinute} />
  </DetailRow>
  <DetailRow title="연령">
    <SpaceAround gap="30px">
      <LabeledBorderedInput
        width="50px"
        bind:value={item.ageMin}
        pre="최소"
        post="세"
      />
      <LabeledBorderedInput
        width="50px"
        bind:value={item.ageMax}
        pre="최대"
        post="세"
      />
    </SpaceAround>
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
        bind:value={item.include}
      />
      <LabeledBorderedInput
        pre="불포함"
        post=""
        width="700px"
        preWidth="70px"
        bind:value={item.exclude}
      />
    </FlexCol>
  </DetailRow>
  <DetailRow title="공지사항">
    <BorderedTextArea bind:value={item.checkList} height="300px" />
  </DetailRow>
  <DetailRow title="라벨">
    <BorderedInput bind:value={item.label} />
    <LightGreyText fontSize="14px" marginLeft="10px"
      >미사용 시 빈칸으로 유지</LightGreyText
    >
  </DetailRow>

  <DetailRow title="썸네일">
    <FlexCol gap="10px">
      <Flex gap="10px">
        <input
          type="file"
          accept="image/*"
          bind:value={tfile1}
          on:change={tfileHandler1}
        />
        {#if item.thumbnail01 != null}
          <Image width="70%" height="350px" src={item.thumbnail01} />
        {/if}
      </Flex>

      <Flex gap="10px">
        <input
          type="file"
          accept="image/*"
          bind:value={tfile2}
          on:change={tfileHandler2}
        />
        {#if item.thumbnail02 != null}
          <Image width="70%" height="350px" src={item.thumbnail02} />
        {/if}
      </Flex>

      <Flex gap="10px">
        <input
          type="file"
          accept="image/*"
          bind:value={tfile3}
          on:change={tfileHandler3}
        />
        {#if item.thumbnail03 != null}<Image
            width="70%"
            height="350px"
            src={item.thumbnail03}
          />{/if}
      </Flex>

      <Flex gap="10px">
        <input
          type="file"
          accept="image/*"
          bind:value={tfile4}
          on:change={tfileHandler4}
        />
        {#if item.thumbnail04 != null}
          <Image width="70%" height="350px" src={item.thumbnail04} />
        {/if}
      </Flex>

      <Flex gap="10px">
        <input
          type="file"
          accept="image/*"
          bind:value={tfile5}
          on:change={tfileHandler5}
        />
        {#if item.thumbnail05 != null}
          <Image width="70%" height="350px" src={item.thumbnail05} />{/if}
      </Flex>
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
    <Flex gap="10px">
      <BorderedInput bind:value={item.excludingDate} width="500px" />

      <link
        rel="stylesheet"
        href="https://unpkg.com/nanocal@0.4.0/dist/nanocal.css"
      />

      <button id="showCalendarButton">달력 보기</button>
      <div id="nanocal" />

      <script type="module">
        // JavaScript 코드
        import Nanocal from "https://unpkg.com/nanocal@0.4.0/dist/nanocal.min.js";

        const showCalendarButton =
          document.getElementById("showCalendarButton");
        const nanocalContainer = document.getElementById("nanocal");
        let nanocalInstance = null;

        showCalendarButton.addEventListener("click", () => {
          if (!nanocalInstance) {
            nanocalInstance = new Nanocal({ target: nanocalContainer });
            nanocalInstance.$on("selectedDay", ({ detail: day }) =>
              console.log(day)
            );
          } else {
            nanocalInstance.$destroy();
            nanocalInstance = null;
          }
        });
      </script>
    </Flex>
  </DetailRow>

  <DetailRow title="옵션1">
    <Flex gap="20px">
      <BorderedInput bind:value={optiontitle1} fontSize="16px" />
      <FlexCol gap="10px">
        {#each options as option, optionIndex}
          {#each option.details as detail, detailIndex}
            <Flex gap="10px">
              <BorderedInput
                bind:value={detail}
                placeholder="상세 정보"
                width="700px"
              />

              {#if detailIndex === option.details.length - 1}
                {#if option.details.length < maxOptions}
                  <GreyBackgroundButton
                    width="50px"
                    height="30px"
                    fontSize="14px"
                    onClick={() => addDetail(options, optionIndex)}
                    >추가</GreyBackgroundButton
                  >
                {/if}
              {:else}
                <GreyBackgroundButton
                  width="50px"
                  height="30px"
                  fontSize="14px"
                  onClick={() =>
                    removeDetail(options, optionIndex, detailIndex)}
                  >삭제</GreyBackgroundButton
                >
              {/if}
            </Flex>
          {/each}
        {/each}</FlexCol
      ></Flex
    >
  </DetailRow>

  <DetailRow title="옵션2">
    <Flex gap="20px">
      <BorderedInput bind:value={optiontitle2} fontSize="16px" />

      <FlexCol gap="10px">
        {#each options2 as option, optionIndex}
          {#each option.details as detail, detailIndex}
            <Flex gap="10px">
              <BorderedInput
                bind:value={detail}
                placeholder="상세 정보"
                width="700px"
              />

              {#if detailIndex === option.details.length - 1}
                {#if option.details.length < maxOptions}
                  <GreyBackgroundButton
                    width="50px"
                    height="30px"
                    fontSize="14px"
                    onClick={() => addDetail(options2, optionIndex)}
                    >추가</GreyBackgroundButton
                  >
                {/if}
              {:else}
                <GreyBackgroundButton
                  width="50px"
                  height="30px"
                  fontSize="14px"
                  onClick={() =>
                    removeDetail(options2, optionIndex, detailIndex)}
                  >삭제</GreyBackgroundButton
                >
              {/if}
            </Flex>
          {/each}
        {/each}</FlexCol
      ></Flex
    >
  </DetailRow>

  <DetailRow title="옵션3">
    <Flex gap="20px">
      <BorderedInput bind:value={optiontitle3} fontSize="16px" />

      <FlexCol gap="10px">
        {#each options3 as option, optionIndex}
          {#each option.details as detail, detailIndex}
            <Flex gap="10px">
              <BorderedInput
                bind:value={detail}
                placeholder="상세 정보"
                width="700px"
              />

              {#if detailIndex === option.details.length - 1}
                {#if option.details.length < maxOptions}
                  <GreyBackgroundButton
                    width="50px"
                    height="30px"
                    fontSize="14px"
                    onClick={() => addDetail(options3, optionIndex)}
                    >추가</GreyBackgroundButton
                  >
                {/if}
              {:else}
                <GreyBackgroundButton
                  width="50px"
                  height="30px"
                  fontSize="14px"
                  onClick={() =>
                    removeDetail(options3, optionIndex, detailIndex)}
                  >삭제</GreyBackgroundButton
                >
              {/if}
            </Flex>
          {/each}
        {/each}</FlexCol
      ></Flex
    >
  </DetailRow>
  <div class="centered">
    <GreyBackgroundButton
      fontSize="14px"
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
          <th style="width:200px">가격</th>
          <th style="width:200px">재고</th>
        </tr>
      </thead>
      <tbody>
        {#each tableData as item, itemIndex}
          <tr>
            <td class="optionValue">{item.optionValue}</td>
            <td style="width:200px">
              <input
                class="stock"
                type="text"
                value={item.price || ""}
                on:input={(event) => handlePriceInput(event, itemIndex)}
              />
            </td>
            <td style="width:200px">
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
          {#each option.details as detail, detailIndex}
            <Flex gap="10px">
              <BorderedInput
                bind:value={detail}
                placeholder="상세 정보"
                width="700px"
              />

              {#if detailIndex === option.details.length - 1}
                {#if option.details.length < maxOptions}
                  <GreyBackgroundButton
                    width="50px"
                    height="30px"
                    fontSize="14px"
                    onClick={() => addDetail(options4, optionIndex)}
                    >추가</GreyBackgroundButton
                  >
                {/if}
              {:else}
                <GreyBackgroundButton
                  width="50px"
                  height="30px"
                  fontSize="14px"
                  onClick={() =>
                    removeDetail(options4, optionIndex, detailIndex)}
                  >삭제</GreyBackgroundButton
                >
              {/if}
            </Flex>
          {/each}
        {/each}
      </FlexCol></Flex
    >
  </DetailRow>

  <div class="centered">
    <GreyBackgroundButton
      fontSize="14px"
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
          <th style="width:200px">가격</th>
          <th style="width:200px">재고</th>
        </tr>
      </thead>
      <tbody>
        {#each tableData2 as item, itemIndex}
          <tr>
            <td class="optionValue">{item.title}</td>
            <td style="width:200px">
              <input
                class="stock"
                type="text"
                value={item.price || ""}
                on:input={(event) => handlePriceInput2(event, itemIndex)}
              />
            </td>
            <td style="width:10%">
              <input
                class="stock"
                type="text"
                value={item.stock || ""}
                on:input={(event) => handleStockInput2(event, itemIndex)}
              />
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}

  <div class="title"><BoldText fontSize="20px">상세정보</BoldText></div>
  <DetailRow title="인트로 이미지">
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
    margin: 0 auto;
    width: 80%;
    height: auto;
    border-spacing: 10px;
    border: 1px solid white;
    margin-bottom: 20px;
  }
  .optionValue {
    background-color: #eeeeee;
    border-radius: 10px;
    padding: 10px;
  }
  .stock {
    border: 1px solid #cecece;
    font-size: 16px;
    padding: 10px;
    width: 200px;
  }
  .centered {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    margin: 10px 0 10px 0;
  }
</style>

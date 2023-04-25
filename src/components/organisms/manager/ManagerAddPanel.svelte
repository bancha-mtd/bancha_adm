<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import BorderedInput from "../../atoms/inputs/BorderedInput.svelte";
	import BoldText from "../../atoms/texts/BoldText.svelte";
	import DetailPanelLayout from "../../layouts/DetailPanelLayout.svelte";
	import SearchLayout from "../../layouts/SearchLayout.svelte";
	import DetailRow from "../../molecules/detail/DetailRow.svelte";
	import Select from "../../molecules/search/Select.svelte";
	import APIs from "../../utils/APIs";

	let managerGrade = [
		{ id: 1, name: "최고 관리자", value: 1 },
		{ id: 2, name: "중간 관리자", value: 2 },
		{ id: 3, name: "일반 관리자", value: 3 },
	];
	let selected = managerGrade[0];
	let item = {
		userid: "",
		passwd: "",
		name: "",
		type: 1,
		department: "",
		remark: "",
		userYn: true,
	};

	export let reload: () => void;
	export let addManager: () => void = () => {
		item.type = selected.value;
		console.log(item);
		APIs.addManager(item).then((res) => {
			if (res.status === 200) {
				console.log(res);
				reload();
			}
		});
	};
</script>

<SearchLayout>
	<BoldText fontSize="18px">관리자 추가</BoldText>

	<GreyBackgroundButton
		onClick={addManager}
		width="60px"
		height="30px"
		fontSize="16px">추가</GreyBackgroundButton
	>
</SearchLayout>
<DetailPanelLayout marginBottom={true}>
	<DetailRow title="이메일">
		<BorderedInput type="email" bind:value={item.userid} width="300px" />
	</DetailRow>
	<DetailRow title="비밀번호">
		<BorderedInput type="password" bind:value={item.passwd} width="300px" />
	</DetailRow>
	<DetailRow title="닉네임">
		<BorderedInput bind:value={item.name} width="300px" />
	</DetailRow>
	<DetailRow title="권한">
		<Select lists={managerGrade} bind:selected fontSize="16px" height="30px" />
	</DetailRow>
	<DetailRow title="소속">
		<BorderedInput bind:value={item.department} width="300px" />
	</DetailRow>
</DetailPanelLayout>

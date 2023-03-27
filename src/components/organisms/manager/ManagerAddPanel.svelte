<script lang="ts">
	import GreyBackgroundButton from "../../atoms/buttons/GreyBackgroundButton.svelte";
	import BorderedInput from "../../atoms/inputs/BorderedInput.svelte";
	import BoldText from "../../atoms/texts/BoldText.svelte";
	import DetailPanelLayout from "../../layouts/DetailPanelLayout.svelte";
	import SearchLayout from "../../layouts/SearchLayout.svelte";
	import DetailRow from "../../molecules/detail/DetailRow.svelte";
	import Select from "../../molecules/search/Select.svelte";

	let managerGrade = [
		{ id: 1, name: "최고 관리자", value: 1 },
		{ id: 2, name: "중간 관리자", value: 2 },
		{ id: 3, name: "일반 관리자", value: 3 },
	];
	let item = {
		email: "",
		password: "",
		nickname: "",
		grade: managerGrade[0],
		group: "",
	};

	export let addManager: () => void = () => {};
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
<DetailPanelLayout>
	<DetailRow title="회원번호" head={true}>
		<BorderedInput height="30px" fontSize="16px" disabled={true} value={"-1"} />
	</DetailRow>
	<DetailRow title="이메일">
		<BorderedInput type="email" bind:value={item.email} width="300px" />
	</DetailRow>
	<DetailRow title="비밀번호">
		<BorderedInput type="password" bind:value={item.password} width="300px" />
	</DetailRow>
	<DetailRow title="닉네임">
		<BorderedInput bind:value={item.nickname} width="300px" />
	</DetailRow>
	<DetailRow title="권한">
		<Select
			lists={managerGrade}
			bind:selected={item.grade}
			fontSize="16px"
			height="30px"
		/>
	</DetailRow>
	<DetailRow title="소속">
		<BorderedInput bind:value={item.group} width="300px" />
	</DetailRow>
</DetailPanelLayout>

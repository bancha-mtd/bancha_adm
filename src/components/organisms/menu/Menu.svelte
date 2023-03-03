<script lang="ts">
	import MenuSection from "../../molecules/menu/MenuSection.svelte";
	import { menus, routers } from "../../stores/MenuStore";

	let selected = 0;
</script>

<div>
	<MenuSection
		title="상품"
		menus={$menus[0]}
		routers={$routers[0]}
		startIdx={0}
		bind:selected
	/>
	<MenuSection
		title="예약"
		menus={$menus[1]}
		routers={$routers[1]}
		startIdx={5}
		bind:selected
	/>
	<MenuSection
		title="회원"
		menus={$menus[2]}
		routers={$routers[2]}
		startIdx={7}
		bind:selected
	/>
	<MenuSection
		title="알림"
		menus={$menus[3]}
		routers={$routers[3]}
		startIdx={13}
		bind:selected
	/>
	<MenuSection
		title="설정"
		menus={$menus[4]}
		routers={$routers[4]}
		startIdx={15}
		bind:selected
	/>
	<MenuSection
		title="통계"
		menus={$menus[5]}
		routers={$routers[5]}
		startIdx={23}
		bind:selected
	/>
</div>

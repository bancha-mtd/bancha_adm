<script lang="ts">
	import MenuSection from "../../molecules/menu/MenuSection.svelte";

	let selected = 0;
	let menus = [
		["상품관리", "카테고리", "공동구매", "기획전", "섹션"],
		["예약관리", "후기관리"],
		["일반", "파트너", "관리자", "파트너 문의", "파트너 정산", "포인트 내역"],
		["문자메시지", "푸쉬알림"],
		[
			"이벤트",
			"배너",
			"프리스크린",
			"검색/키워드",
			"환불규정",
			"포인트",
			"문자메시지",
			"푸쉬알림",
		],
		["상품", "방문자"],
	];
</script>

<div>
	<MenuSection title="상품" menus={menus[0]} startIdx={0} bind:selected />
	<MenuSection title="예약" menus={menus[1]} startIdx={5} bind:selected />
	<MenuSection title="회원" menus={menus[2]} startIdx={7} bind:selected />
	<MenuSection title="알림" menus={menus[3]} startIdx={13} bind:selected />
	<MenuSection title="설정" menus={menus[4]} startIdx={15} bind:selected />
	<MenuSection title="통계" menus={menus[5]} startIdx={23} bind:selected />
</div>

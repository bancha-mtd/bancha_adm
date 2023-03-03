import { writable, type Writable } from "svelte/store";

export let menus:Writable<string[][]> = writable([
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
]);
export let routers:Writable<string[][]> = writable([
  ["item", "category", "none", "exhibition", "section"],
  ["reservation", "review"],
  ["user", "partner", "manager", "qa", "파트너 정산", "포인트 내역"],
  ["message", "push"],
  [
    "event",
    "banner",
    "pre",
    "keyword",
    "refund",
    "point",
    "preset/message",
    "preset/alarm",
  ],
  ["stat/item", "stat/user"],
]);

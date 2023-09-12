import React from "react";
import "./Menu.css";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button/Button";

const Menu = () => {
  const menus = [
    ["상품관리", "기획전", "그룹 딜", "카테고리", "섹션"],
    ["예약관리", "후기관리"],
    ["일반", "파트너", "관리자", "포인트 내역"],
    ["문자메시지", "푸쉬알림"],
    [
      "공지사항/FAQ",
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
  const routes = [
    [
      "/adm/product",
      "/adm/exhibition",
      "/adm/groupdeal",
      "/adm/category",
      "/adm/section",
    ],
    ["/adm/reservation", "/adm/review"],
    ["/adm/member", "/adm/partner", "/adm/manager", "/adm/point"],
    ["/adm/message", "/adm/push"],
    [
      "/adm/notice",
      "/adm/event",
      "/adm/banner",
      "/adm/pre",
      "/adm/keyword",
      "/adm/refund",
      "/adm/preset/adm/point",
      "/adm/preset/adm/message",
      "/adm/preset/adm/push",
    ],
    ["/adm/stat/adm/item", "/adm/stat/adm/user"],
  ];
  const navigate = useNavigate();

  return (
    <nav>
      {menus.map((e, i) => {
        return (
          <div className="menu-section" key={`MenuSection${i}`}>
            {routes[i].map((item, idx) => {
              return (
                <Button
                  key={`MenuButton_${e[idx]}`}
                  color="transparent"
                  onClick={() => {
                    navigate(item);
                  }}>
                  {e[idx]}
                </Button>
              );
            })}
          </div>
        );
      })}
    </nav>
  );
};

export default Menu;

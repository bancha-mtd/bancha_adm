import { create } from "zustand";

interface UserInfo {
  isLoggedIn: boolean;
  email: string;
  nickname: string;
  id: number;
  type: number;

  setIsLoggedIn: (val: boolean) => void;
  setEmail: (val: string) => void;
  setNickname: (val: string) => void;
  setId: (val: number) => void;
  setType: (val: number) => void;
}

export default create<UserInfo>((set) => ({
  isLoggedIn: false,
  email: "",
  nickname: "",
  id: -1,
  type: -1,

  setIsLoggedIn: (val: boolean) => {
    set({ isLoggedIn: val });
  },
  setEmail: (val: string) => {
    set({ email: val });
  },
  setNickname: (val: string) => {
    set({ nickname: val });
  },
  setId: (val: number) => {
    set({ id: val });
  },
  setType: (val: number) => {
    set({ type: val });
  },
}));

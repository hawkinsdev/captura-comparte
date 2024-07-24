import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { encrypt_data } from "../lib/utils/common";
import { UserInfo } from "../types/user"

interface UserState {
  user_info: UserInfo | null;
  set_user_info: (userInfo: UserInfo | null) => void;
}

export const UseUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        user_info: null,
        set_user_info: (user) => set({ user_info: user}),
      }),
      { name: encrypt_data("UserStore") }
    )
  )
);

import { create } from "zustand";

interface Store {
  mode: string;
  setMode: (payload: string) => void;
}

const useStore = create<Store>()((set) => ({
  mode: "login",
  setMode: (payload: string) => {
    set(() => ({
      mode: payload,
    }));
  },
}));

export default useStore;

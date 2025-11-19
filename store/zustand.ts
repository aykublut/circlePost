import { create } from "zustand";

interface Store {
  //AUTH
  mode: string;
  setMode: (payload: string) => void;
  //
  //PAGETRANSISTION
  nextPage: boolean;
  setNextPage: (payload: boolean) => void;
  //
}

const useStore = create<Store>()((set) => ({
  //AUTH
  mode: "login",
  setMode: (payload: string) => {
    set(() => ({
      mode: payload,
    }));
  },
  //
  //PAGETRANSISTION
  nextPage: false,
  setNextPage: (payload: boolean) => {
    set(() => ({
      nextPage: payload,
    }));
  },
  //
}));

export default useStore;

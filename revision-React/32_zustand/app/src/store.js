import { create } from "zustand";

const useMyStore = create((set) => ({
    name: "Sanjay",
    count: 0,

    increment: () =>
        set((state) => ({
            count: state.count + 1,
        })),
}));

export default useMyStore;
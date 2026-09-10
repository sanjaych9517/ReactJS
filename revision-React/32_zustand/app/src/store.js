import { create } from "zustand";

const useMyStore = create((set, get) => ({
    name: "sanjay",
    count: 0,

    increment: () => {
        set((state) => ({
            count: state.count + 1,
        }))
    },
    capitalizeName: () => {
        const { name } = get();
        set({
            name: name.charAt(0).toUpperCase() + name.slice(1)
        })
        
    }
}));

export default useMyStore;
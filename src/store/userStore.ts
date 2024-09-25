import { create } from 'zustand';

const useUserStore = create((set) => ({
  username: '',
  updateUsername: (newUsername: string) => {
    set({ username: newUsername });
  }
}));

export default useUserStore;

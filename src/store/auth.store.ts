"use client";
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'


export interface User {
    id: string | undefined;
    firstName: string | null | undefined;
    lastName: string | null | undefined;
    email: string | null | undefined;
    dob: string | Date;
    address?: string | null | undefined;
    image?: string | null | undefined;
};

interface AuthState {
  user: User;
  accessToken: string;
  refreshToken: string;
  setUser: (user: User) => void;
  setAccessToken: (accessToken: string) => void,
  setRefreshToken: (refreshToken: string) => void,
  clearUser: () => void;
  clearTokens: ()=>void;
}


const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: {} as User,
      accessToken: "",
      refreshToken: "",
      setAccessToken: (accessToken) => set({ accessToken }),
      setRefreshToken: (refreshToken) => set({ refreshToken }),
      setUser: (user: User) => set({ user }),
      clearUser: ()=> set({ user: {} as User}),
      clearTokens: () => set({ accessToken: "", refreshToken: "" }),
    }),
    {
      name: 'auth_st', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)

export default useAuthStore
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TPages = "/" | "/about" | "/contacts" | "/news";
interface IState {
  pages: {
    "/": string;
    "/about": string;
    "/contacts": string;
    "/news": string;
  };
}
const initialState: IState = {
  pages: {
    "/": "/",
    "/about": "about",
    "/contacts": "contacts",
    "/news": "news",
  },
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    changeNamePages(state, { payload: { path, title } }: PayloadAction<{ path: TPages; title: string }>) {
      state.pages[path] = title;
    },
  },
});

export const {changeNamePages} = settingsSlice.actions;

export default settingsSlice.reducer;

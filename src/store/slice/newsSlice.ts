import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INews } from "../../models/models";
import { RootState } from "../store";

interface NewsState {
  loading: boolean;
  error: string;
  news: INews[];
}


const initialState: NewsState = {
  loading: false,
  error: '',
  news: []
}

export const NewsSlice = createSlice({
  name: 'news',
  initialState: initialState,
  reducers: {

    fetching: (state) => {
      state.loading = true;
    },

    fetchSuccess: (state, action: PayloadAction<INews[]>) => {
      state.loading = false;
      state.news = action.payload;
    },

    fetchError: (state, action: PayloadAction<Error>) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  }
})

export const { fetching, fetchSuccess, fetchError } = NewsSlice.actions;

export const news = (state: RootState) => state.news;

export default NewsSlice.reducer;

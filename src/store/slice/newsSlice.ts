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
  news: [],
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

    deleteNews: (state, action: PayloadAction<number>) => {
      let id = action.payload;

      state.news = state.news.filter((item) => {
        return item.id !== id;
      });
    },

    setFeature: (state, action: PayloadAction<{ feature: boolean; id: number }>) => {
      // const index = state.findIndex((news) => news.id === action.payload.id);
      // state[index].feature = action.payload.feature;
      const toggleNews = state.news.find(news => news.id === action.payload.id)
      if (toggleNews !== undefined) {
        toggleNews.feature = !toggleNews?.feature
      }

    },

  }
})

export const { fetching, fetchSuccess, fetchError, deleteNews, setFeature } = NewsSlice.actions;

export const news = (state: RootState) => state.news;

export default NewsSlice.reducer;

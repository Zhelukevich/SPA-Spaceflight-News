import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { ListFormat } from "typescript";
import { INews } from "../../models/models";
import { RootState } from "../store";

interface NewsState {
  loading: boolean;
  error: string;
  news: INews[];
  filtered: INews[]
}

const initialState: NewsState = {
  news: [],
  loading: false,
  error: '',
  filtered: []
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

    featuredNews: (state, action: PayloadAction<{ featured: boolean; id: number }>) => {
      const toggleNews = state.news.find(news => news.id === action.payload.id);

      if (toggleNews !== undefined) {
        toggleNews.featured = !toggleNews?.featured
        state.filtered = [...state.news].filter(news => news.featured === true)
      }

    },

    // filteredNews: (state, action: PayloadAction) => {

    // }

  }
})

export const { fetching, fetchSuccess, fetchError, deleteNews, featuredNews } = NewsSlice.actions;

export const news = (state: RootState) => state.news;

export default NewsSlice.reducer;

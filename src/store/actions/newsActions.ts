import axios from "../../axios";
import { INews } from "../../models/models";
import { NewsSlice } from "../slice/newsSlice";
import { AppDispatch } from "../store";

export const fetchNews = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(NewsSlice.actions.fetching())
      const response = await axios.get<INews[]>('articles');

      dispatch(NewsSlice.actions.fetchSuccess(
        response.data
      ))
    } catch (e) {
      dispatch(NewsSlice.actions.fetchError(e as Error))
    }
  }
}
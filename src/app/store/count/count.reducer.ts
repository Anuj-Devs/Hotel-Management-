import { createReducer, on } from "@ngrx/store";
import { TableCount } from "../../model/tableCount ";
import { setTableCount } from "./count.action";

export interface State {
  tableCounts: TableCount[];
}

export const initialState: State = {
  tableCounts: []
};

export const reducer = createReducer(
  initialState,
  on(setTableCount, (state, { data }) => {
    return {
      ...state,
      tableCounts: data
    };
  })
);
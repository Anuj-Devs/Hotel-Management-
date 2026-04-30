import { createAction, props } from "@ngrx/store";
import { TableCount } from "../../model/tableCount ";

export const setTableCount = createAction(
  '[Count] set',
  props< { data: TableCount[] }> ()
);




import { State as TState } from "../api/state/State";

export const STATE_TITLE_FIELD = "id";

export const StateTitle = (record: TState): string => {
  return record.id?.toString() || String(record.id);
};

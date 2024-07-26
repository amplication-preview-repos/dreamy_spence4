import { Snapshot as TSnapshot } from "../api/snapshot/Snapshot";

export const SNAPSHOT_TITLE_FIELD = "name";

export const SnapshotTitle = (record: TSnapshot): string => {
  return record.name?.toString() || String(record.id);
};

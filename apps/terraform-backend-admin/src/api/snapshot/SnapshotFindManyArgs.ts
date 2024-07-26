import { SnapshotWhereInput } from "./SnapshotWhereInput";
import { SnapshotOrderByInput } from "./SnapshotOrderByInput";

export type SnapshotFindManyArgs = {
  where?: SnapshotWhereInput;
  orderBy?: Array<SnapshotOrderByInput>;
  skip?: number;
  take?: number;
};

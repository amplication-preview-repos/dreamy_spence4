import { SortOrder } from "../../util/SortOrder";

export type SnapshotOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  environmentId?: SortOrder;
  userId?: SortOrder;
};

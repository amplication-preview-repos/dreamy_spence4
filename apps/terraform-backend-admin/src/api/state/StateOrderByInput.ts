import { SortOrder } from "../../util/SortOrder";

export type StateOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  version?: SortOrder;
  stateData?: SortOrder;
  environmentId?: SortOrder;
  userId?: SortOrder;
  projectId?: SortOrder;
};

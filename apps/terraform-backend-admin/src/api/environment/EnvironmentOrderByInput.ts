import { SortOrder } from "../../util/SortOrder";

export type EnvironmentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  userId?: SortOrder;
  projectId?: SortOrder;
};

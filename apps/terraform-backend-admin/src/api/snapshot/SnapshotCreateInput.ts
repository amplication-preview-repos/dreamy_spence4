import { EnvironmentWhereUniqueInput } from "../environment/EnvironmentWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SnapshotCreateInput = {
  name?: string | null;
  description?: string | null;
  environment?: EnvironmentWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};

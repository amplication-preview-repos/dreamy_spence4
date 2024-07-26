import { InputJsonValue } from "../../types";
import { EnvironmentWhereUniqueInput } from "../environment/EnvironmentWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type StateUpdateInput = {
  version?: number | null;
  stateData?: InputJsonValue;
  environment?: EnvironmentWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
  project?: ProjectWhereUniqueInput | null;
};

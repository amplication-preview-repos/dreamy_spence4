import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { EnvironmentWhereUniqueInput } from "../environment/EnvironmentWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type StateWhereInput = {
  id?: StringFilter;
  version?: IntNullableFilter;
  stateData?: JsonFilter;
  environment?: EnvironmentWhereUniqueInput;
  user?: UserWhereUniqueInput;
  project?: ProjectWhereUniqueInput;
};
